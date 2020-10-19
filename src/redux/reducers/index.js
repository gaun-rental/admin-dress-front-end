import {combineReducers} from "redux";
import userReducers from "./user.reducers";
export default combineReducers({
    data : userReducers,
})