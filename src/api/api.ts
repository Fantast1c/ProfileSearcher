import axios from "axios";

export const getProfileAPI = (userName:string) => {
    return axios.get(`https://api.github.com/users/${userName}`)
        .then(response => {
            return response.data
        })
}
