import axios from "axios";

export const getProfileAPI = (userName:string) => {
    return axios.get(`https://api.github.com/users/${userName}`)
        .then(response => {
            return response.data
        })
}

export const getReposAPI = (userName:string) => {
    return axios.get(`https://api.github.com/users/${userName}/repos?per_page=${4}&page=${1}`)
        .then(response => {
            return response.data
        })
}

