import {
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    LOGOUT,
    LOGIN_INFO
} from '../actions/user.actions';

const token = localStorage.getItem('token');


const initiatState = token 
? {
    isLogged : true,
    data: [],
    error: null
}
: {
    isLogged: false,
    data: [],
    error: null
}

const user = (state = initiatState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLogged: true,
            }
        case LOGIN_FAILED:
            return {
                ...state,
                error: action.payload
            }
        case LOGIN_INFO :
            return {
                ...state,
                data: action.payload,
            }
        case LOGOUT :
            return {};
        default:
            return state;
    }
}
export default user;