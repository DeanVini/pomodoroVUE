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
        return await useAxios("post", "users", "", data)
    }
}

let login = {
    get: async function(email, password){
        return await useAxios("get", `users?email=${email}&password=${password}`, "")
    }
}

export const injector = {login, register}