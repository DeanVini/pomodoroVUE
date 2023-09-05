import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_HOST;
const defaultProfile = {
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

async function useAxios(tipo, entidade, params = "", dados = "", headerOption) {
    try {
        return await axios({
            method: tipo,
            url: BASE_URL + "/" + entidade + params,
            data: dados,
            headers: headerOption
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
        if(await checkDBForUsername(data.username)){
            throw("Nome de usuário já utilizado por outra pessoa!")
        }
        if(await checkDBForEmail(data.email)){
            throw("O e-mail informado já foi utilizado por outra pessoa!")
        }
        return await useAxios("post", "users", "", data)
    }
}

let tasks = {
    create: async function(userId){
        return await useAxios("post", "tasks", "", {
            id: userId,
            taskStored: []
        })
    },
    get: async function(userId){
        return await useAxios("get", `tasks?id=${userId}`)
    }
}

let profiles = {
    create: async function(userId){
        return await useAxios("post", "profiles", "", {
            id: userId,
            ...defaultProfile
        })
    }
}

let login = {
    get: async function(email, password){
        return await useAxios("get", `users?email=${email}&password=${password}`, "")
    }
}

function isValidReq(req){
    return Object.values(req).every(value => {
        if(value == null || value == ""){
            return false;
        }
        if(req.password.length < 8){
            throw("Sua senha precisa ter pelo menos 8 caracteres!")
        }
        return true;
    })
}


async function checkDBForEmail(email){
    let response = await useAxios("get", `users?email=${email}`, "");

    if((response.status == 200 || response.status == 200) && response.data.length > 0){
        return true;
    }
    return false;
}

async function checkDBForUsername(username){
    let response = await useAxios("get", `users?username=${username}`, "");

    if((response.status == 200 || response.status == 201) && response.data.length > 0){
        return true;
    }
    return false;
}

export const injector = {profiles, tasks, login, register, useAxios}
