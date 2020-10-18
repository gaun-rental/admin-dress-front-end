import Axios from 'axios';
import  {setToken} from "./settinglocal";

export const USER_TOKEN = 'USER_TOKEN';
export const LOGIN_URI = '/login';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const LOGOUT = 'LOGOUT';


export const userLoginSuccess = (data) => ({
  type: LOGIN_SUCCESS,
  payload: data,
});

export const userLoginFailed = (error) => ({
  type: LOGIN_FAILED,
  payload: error,
});

export const userLogout = () => ({
  type: LOGOUT,
});

export const userSetUserToken = (data) => ({
  type: USER_TOKEN,
  payload: data,
});

export const setLogin = (values, event) => (dispatch) => {
    event.preventDefault();
  const host = 'http://localhost:8080/user';
  Axios 
    .post(`${host}${LOGIN_URI}`, values)
    .then(response => {
        console.log('data', response)
        setToken(USER_TOKEN, response.data.token)
    .then(() => {
      dispatch(userLoginSuccess(response.data));
    });
  })
  .catch(error => {
      console.log(error)
      dispatch(userLoginFailed(error))
  });
};
