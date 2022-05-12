import { getProfileAPI} from "../api/api";

type setProfileAT = {
    type:"SET-PROFILE"
    payload:any
}
type setToggleIsExistAT = {
    type: "SET-TOGGLE-IS-FETCHING"
    isExist:boolean
}
type setLoaderAT = {
    type: "SET-LOADER"
    isFetching:boolean
}
type unionType = setProfileAT | setToggleIsExistAT | setLoaderAT

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
    isExist: false,
    isFetching: false
}
export type ProfileStateType = typeof initState

export const profileReducer = (state:ProfileStateType = initState, action: unionType) => {
    switch (action.type) {
        case "SET-PROFILE": {
            return {...state, profile: action.payload}
        }
        case "SET-TOGGLE-IS-FETCHING" : {
            return {...state, isExist: action.isExist}
        }
        case "SET-LOADER" : {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state
    }
}

export const setProfileAC = (payload:any) =>({type:"SET-PROFILE", payload})
export const setToggleIsFetchingAC = (isExist:boolean) =>({type:"SET-TOGGLE-IS-FETCHING", isExist})
export const setLoaderAC = (isFetching:boolean) =>({type:"SET-LOADER", isFetching})

export const getProfileTC = (title:string) => async (dispatch:any) => {
    dispatch(setLoaderAC(true))
    dispatch(setToggleIsFetchingAC(false))
    try{
        let response = await getProfileAPI(title)
        dispatch(setToggleIsFetchingAC(true))
        dispatch(setProfileAC(response))
        dispatch(setLoaderAC(false))
    }catch (err:any){
        dispatch(setLoaderAC(false))
    }



}
