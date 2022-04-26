import {getReposAPI} from "../api/api";

type setReposAT = {
    type:"SET-REPOS"
    payload:any
}

type reposType = {
    name:string
    description: string
    html_url:string
}

type unionType = setReposAT

let initState = {
    repos: [] as Array<reposType>
}

export type InitStateType = typeof initState

export const reposReducer = (state:InitStateType = initState, action: unionType) => {
    switch (action.type) {
        case "SET-REPOS": {
            return {...state, repos: action.payload}
        }
        default:
            return state
    }
}

export const setReposAC = (payload:any) =>({type:"SET-REPOS", payload})

export const getReposTC = (title:string) => async (dispatch:any) => {
    let response = await getReposAPI(title)
    dispatch(setReposAC(response))
}