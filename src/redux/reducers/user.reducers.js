import {
    USER_TOKEN,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    LOGOUT
} from '../actions/user.actions';

const initiatState = {
    loading: false,
    error: ""
}

const user = (state = initiatState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false
            }
        case LOGIN_FAILED:
            return {
                ...state,
                loading:false, 
                error: action.payload
            }
        case USER_TOKEN: 
            return  {
                data: action.payload
            }
        case LOGOUT :
            return {};
        default:
            return state;
    }
}
export default user;