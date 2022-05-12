import {getReposAPI} from "../api/api";
import {AppRootStateType} from "./store";

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
type setLoaderAT = {
    type: "SET-REPOS-LOADER"
    isFetching:boolean
}

type unionType = setReposAT | setPageNumberAT | updateUserNameAT | setLoaderAT

let initState = {
    repos: [] as Array<reposType>,
    userName:"",
    pageNumber: 1,
    isFetching: false
}

export type ReposStateType = typeof initState

export const reposReducer = (state:ReposStateType = initState, action: unionType) => {
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
        case "SET-REPOS-LOADER" : {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state
    }
}

export const setReposAC = (payload:any) =>({type:"SET-REPOS", payload})
export const setPageNumberAC = (pageNumber:number) => ({type:"SET-PAGE-NUMBER", pageNumber})
export const updateUserNameAC = (userName:string) => ({type:"UPDATE-USER-NAME", userName})
export const setReposLoaderAC = (isFetching:boolean) =>({type:"SET-LOADER", isFetching})

export const getReposTC = (userName:string, pageNumber:number) => async (dispatch:any, getState:()=>AppRootStateType) => {
    dispatch(setReposLoaderAC(true))
    dispatch(updateUserNameAC(userName))
    dispatch(setPageNumberAC(pageNumber))
    let response = await getReposAPI(getState().repos.userName, getState().repos.pageNumber)
    dispatch(setReposAC(response))
    dispatch(setReposLoaderAC(false))
}
