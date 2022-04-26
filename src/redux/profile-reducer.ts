import { getProfileAPI} from "../api/api";

type setProfileAT = {
    type:"SET-PROFILE"
    payload:any
}
type unionType = setProfileAT

type profileType = {
    login:string
    followers:string
    following:string
    name:string
    avatar_url:string
    html_url:string
}


let initState = {
    profile: {} as profileType
}
export type InitStateType = typeof initState

export const profileReducer = (state:InitStateType = initState, action: unionType) => {
    switch (action.type) {
        case "SET-PROFILE": {
            return {...state, profile: action.payload}
        }
        default:
            return state
    }
}

export const setProfileAC = (payload:any) =>({type:"SET-PROFILE", payload})

export const getProfileTC = (title:string) => async (dispatch:any) => {
    let response = await getProfileAPI(title)
    dispatch(setProfileAC(response))
}
