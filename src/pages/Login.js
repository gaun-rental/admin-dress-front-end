import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';

import {setLoginUser} from '../redux/actions/user.actions';
import "./styles/StyleAdmin.css";

function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.data)
  const [login, setLogin] = useState({
    email: "",
    password: "",
  })

  console.log('login', login)
  console.log('user', user)
  
  const [error, setError] = useState(null);

  console.log('error', error)
  // useEffect(() => {
  //   // do stuff
    
  //   if (user.error !== null) {
  //     setError(user.error);
  //   }
  // }, [user]);



const handleChange = (e) => {
  setLogin({
    ...login,
    [e.target.name] : e.target.value
  })
}

const handleSubmit = (event) => {
  dispatch(setLoginUser(login, event, history));
  if(user.error !== null) {
    setError(user.error);
  }

}

  return (
    <>
      <div className="container">
        {/* <!-- Outer Row --> */}
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                {/* <!-- Nested Row within Card Body --> */}
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center">
                      {error ? 
                      <div>
                        <p>not connect</p>

                      </div>
                      : null}

                        <h1 className="h4 text-gray-900 mb-4">LOGIN</h1>
                      </div>
                      <form className="user"
                        onSubmit={handleSubmit}
                      >
                        <div className="form-group">
                          <input
                            type="email"
                            name= "email"
                            value = {login.email}
                            onChange={(e) => handleChange(e)}
                            className="form-control form-control-user"
                            id="exampleInputEmail"
                            aria-describedby="emailHelp"
                            placeholder="Masukkan Email Anda"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            name="password"
                            value = {login.password}
                            onChange={(e) => handleChange(e)}
                            className="form-control form-control-user"
                            id="exampleInputPassword"
                            placeholder="Masukkan Password Anda"
                          />
                        </div>
                        <div className="form-group">
                          <div className="custom-control custom-checkbox small">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheck"
                            />
                            <label
                              className="custom-control-label"
                            >
                              Remember Me
                            </label>
                          </div>
                        </div>
                        {/* <a
                          className="btn btn-primary btn-user btn-block"
                        >
                          Login
                        </a> */}
                        <button>Login</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
