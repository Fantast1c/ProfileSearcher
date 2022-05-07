import { getProfileAPI} from "../api/api";

type setProfileAT = {
    type:"SET-PROFILE"
    payload:any
}
type setToggleIsExistAT = {
    type: "SET-TOGGLE-IS-EXIST"
    isExist:boolean
}
type unionType = setProfileAT | setToggleIsExistAT

type profileType = {
    login:string
    followers:string
    following:string
    name:string
    avatar_url:string
    html_url:string
    public_repos:number
}


let initState = {
    profile: {} as profileType,
    isExist: false
}
export type ProfileStateType = typeof initState

export const profileReducer = (state:ProfileStateType = initState, action: unionType) => {
    switch (action.type) {
        case "SET-PROFILE": {
            return {...state, profile: action.payload}
        }
        case "SET-TOGGLE-IS-EXIST" : {
            return {...state, isExist: action.isExist}
        }
        default:
            return state
    }
}

export const setProfileAC = (payload:any) =>({type:"SET-PROFILE", payload})
export const setToggleIsExistAC = (isExist:boolean) =>({type:"SET-TOGGLE-IS-EXIST", isExist})

export const getProfileTC = (title:string) => async (dispatch:any) => {
    dispatch(setToggleIsExistAC(false))
    let response = await getProfileAPI(title)
    dispatch(setToggleIsExistAC(true))
    dispatch(setProfileAC(response))
}
