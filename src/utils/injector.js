import axios from "axios";
import { API_URL } from "../config/api.js";
import router from "../router/index.js";

const BASE_URL = API_URL;
const defaultProfile = {
    lastProfile: 1,
    profileStored: [
        {
          name: "Default",
          focusTime: 25,
          break: 5,
          longBreak: 15,
          id: 1
        }
    ]
}

function getAuthToken() {
    return localStorage.getItem('access_token');
}

function getAuthHeaders() {
    const token = getAuthToken();
    return token ? {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
    } : {
        'Content-Type': 'application/json'
    };
}

async function useAxios(tipo, entidade, params = "", dados = "", customHeaders = null) {
    try {
        const headers = customHeaders || getAuthHeaders();

        return await axios({
            method: tipo,
            url: BASE_URL + "/" + entidade + params,
            data: dados,
            headers: headers
        })

    } catch (error) {
        return error.response ?? error;
    }
}

let register = {
    post: async function (data){
        if(!isValidReq(data)){
            throw("Preencha todos os campos!")
        }

        const response = await useAxios("post", "users", "", data);

        if (response.status === 409) {
            throw("Nome de usuário ou email já utilizado por outra pessoa!");
        }

        if (response.status === 400) {
            throw("Dados inválidos!");
        }

        return response;
    }
}

let tasks = {
    create: async function(){
        const taskData = {
            taskStored: []
        };

        return await useAxios("post", "tasks", "", taskData);
    },
    get: async function(){
        return await useAxios("get", "tasks");
    },
    put: async function(tasks){
        return await useAxios("patch", "tasks", '', {
            taskStored: tasks
        });
    },
    editFinished: async function(taskId, tasks){
        let newTaskArray = [...tasks];
        newTaskArray = newTaskArray.map((task, index) => {
            if(index === taskId){
                return { ...task, finished: !task.finished };
            }
            return task;
        });

        return await useAxios("patch", "tasks", '', {
            taskStored: newTaskArray
        });
    },
    delete: async function(){
        return await useAxios("delete", "tasks");
    }
}

let profiles = {
    create: async function(){
        return await useAxios("post", "profiles", "", defaultProfile);
    },
    get: async function(){
        return await useAxios("get", "profiles");
    },
    update: async function(profileData){
        return await useAxios("patch", "profiles", "", profileData);
    },
    delete: async function(){
        return await useAxios("delete", "profiles");
    }
}

let login = {
    post: async function(username, password){
        const { data } = await useAxios("post", "auth/login", "", {
            username,
            password
        });

        console.log(data)

        if (data.access_token) {
            localStorage.setItem('access_token', data.access_token);
            localStorage.setItem('user', JSON.stringify(data.user));
            await router.push('/')
        }

        return data;
    },
    logout: function(){
        localStorage.removeItem('access_token');
        localStorage.removeItem('user');
    }
}

let users = {
    findAll: async function(){
        return await useAxios("get", "users");
    },
    findOne: async function(id){
        return await useAxios("get", `users/${id}`);
    },
    update: async function(id, data){
        return await useAxios("patch", `users/${id}`, "", data);
    },
    delete: async function(id){
        return await useAxios("delete", `users/${id}`);
    }
}

function isValidReq(req){
    return Object.values(req).every(value => {
        if(value == null || value == ""){
            return false;
        }
        if(req.password && req.password.length < 8){
            throw("Sua senha precisa ter pelo menos 8 caracteres!")
        }
        return true;
    })
}

function isAuthenticated(){
    return !!getAuthToken();
}

function getCurrentUser(){
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
}

export const injector = {profiles, tasks, login, register, users, useAxios, isAuthenticated, getCurrentUser}
