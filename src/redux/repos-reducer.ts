import {getReposAPI} from "../api/api";

type setReposAT = {
    type:"SET-REPOS"
    payload:any
}
type setPageNumberAT = {
    type:"SET-PAGE-NUMBER"
    pageNumber:number
}
type updateUserNameAT = {
    type: "UPDATE-USER-NAME"
    userName:string
}

type reposType = {
    name:string
    description: string
    html_url:string
}


type unionType = setReposAT | setPageNumberAT | updateUserNameAT

let initState = {
    repos: [] as Array<reposType>,
    userName:"",
    pageNumber: 1
}

export type InitStateType = typeof initState

export const reposReducer = (state:InitStateType = initState, action: unionType) => {
    switch (action.type) {
        case "SET-REPOS": {
            return {...state, repos: action.payload}
        }
        case "SET-PAGE-NUMBER": {
            return {...state, pageNumber: action.pageNumber }
        }
        case "UPDATE-USER-NAME":{
            return {...state, userName: action.userName}
        }
        default:
            return state
    }
}

export const setReposAC = (payload:any) =>({type:"SET-REPOS", payload})
export const setPageNumberAC = (pageNumber:number) => ({type:"SET-PAGE-NUMBER", pageNumber})
export const updateUserNameAC = (userName:string) => ({type:"UPDATE-USER-NAME", userName})

export const getReposTC = (userName:string, pageNumber:number) => async (dispatch:any, getState:any) => {
    dispatch(updateUserNameAC(userName))
    dispatch(setPageNumberAC(pageNumber))
    let response = await getReposAPI(getState().repos.userName, getState().repos.pageNumber)
    dispatch(setReposAC(response))
}
