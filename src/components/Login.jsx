/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";

const Login = () => {
    const {singIn} = useContext(AuthContext)
  const handleLogIn = (event) => {
    event.preventDefault();
    // const form = event.target.closest("form");
    // Use closest() to get the nearest form element
    const form = event.target;
    const email = form.email.value; // Ensure that the form element and name attribute are correct
    const password = form.password.value;
    

    singIn(email, password)
    .then(res => {
        const user = res.user;
        console.log(user , "log in");
    })
    .catch(error =>{
        console.log(error.message);
    })

  };
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col  ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">LogIn</button>
              </div>
              <div className="mt-5">
                <label className="label">
                  <Link className="label-text-alt link link-hover">
                    Forget password?
                  </Link>
                </label>
                <label className="label">
                  <Link
                    to={"/register"}
                    className="label-text-alt link link-hover"
                  >
                    New to auth mester. Please register!
                  </Link>
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
