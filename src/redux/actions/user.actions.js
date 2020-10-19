import Axios from 'axios';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_INFO = 'LOGIN_INFO';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const LOGOUT = 'LOGOUT';


export const userLoginSuccess = (data) => {
  return {
    type: LOGIN_SUCCESS,
    payload: data,
  }

};

export const userLoginInfo = (data) => {
  return {
    type: LOGIN_INFO,
  payload: data,
  }
}

export const userLoginFailed = (data) => {
  return {
    type: LOGIN_FAILED,
    payload: data,
  }
};

export const userLogout = () => ({
  type: LOGOUT,
});

export const setLoginUser = (values, event, history) => {
    return (dispatch) => {
      event.preventDefault();
  const host = 'http://localhost:8080';
  return Axios 
    .post(`${host}/login`, values)
    .then(response => {
        console.log('data', response)
        if(response.data.token !== undefined) {
          localStorage.setItem('token', response.data.token);
          dispatch(userLoginSuccess(response.data.token));
          history.push('/dashboard');
        }
  })
  .catch(error => {
      console.log('error catch', error.response.data)
      dispatch(userLoginFailed(error.response.data))
  });
    }
};
// export const setInfoLogin = () => async(dispatch) => {

// }