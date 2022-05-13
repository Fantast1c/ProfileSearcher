import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {profileReducer} from "./profile-reducer";
import {reposReducer} from "./repos-reducer";

const rootReducer = combineReducers({
        profile:profileReducer,
        repos:reposReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type AppRootStateType = ReturnType<typeof rootReducer>
