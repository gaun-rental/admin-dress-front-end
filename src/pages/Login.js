import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';

import {setLogin} from '../redux/actions/user.actions';
import "./styles/StyleAdmin.css";

function Login() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user)
  const [login, setLogins] = useState({
    email: "",
    password: "",
  })
  
  const [error, setError] = useState();

  console.log('error', error)
  useEffect(() => {
    // do stuff
    if (user.error !== null) {
      setError(user.error);
    }
  }, [user]);


const handleChange = (e) => {
  setLogins({
    ...login,
    [e.target.name] : e.target.value
  })
}

const handleSubmit = (event) => {
  dispatch(setLogin(login, event));
  if(user.errors !== null) {
    setError(user.errors);
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
                      {error ? <h1>ada error</h1> : null}

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
                        <a
                          href="index.html"
                          className="btn btn-primary btn-user btn-block"
                        >
                          Login
                        </a>
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
