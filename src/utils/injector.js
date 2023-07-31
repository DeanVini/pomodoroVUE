import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_HOST;

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
        console.log("data", data)
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

let login = {
    get: async function(email, password){
        return await useAxios("get", `users?email=${email}&password=${password}`, "")
    }
}

function isValidReq(req){
    return Object.values(req).every(value => {
        console.log(value);
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
    console.log('Email:',response.data.length)

    if((response.status == 200 || response.status == 200) && response.data.length > 0){
        return true;
    }
    return false;
}

async function checkDBForUsername(username){
    let response = await useAxios("get", `users?username=${username}`, "");

    console.log('Username:',response.data.length)
    console.log('status', response.status)

    if((response.status == 200 || response.status == 201) && response.data.length > 0){
        console.log("false")
        return true;
    }
    return false;
}

export const injector = {login, register, useAxios}
