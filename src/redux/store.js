import {combineReducers, legacy_createStore as createStore} from "redux";
import {userReducer} from "./userReducer";

let store = createStore(combineReducers({
    user: userReducer
}))

export default store