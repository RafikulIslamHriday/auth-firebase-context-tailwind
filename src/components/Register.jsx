/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import  { AuthContext } from '../providers/AuthProviders';

const Register = () => {
    const {user , createUser} = useContext(AuthContext)

  const handleRegister = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(name, email, password);
    createUser(email, password)
    .then(res => {
        const user = res.user;
        console.log(user,"abc user");
        form.reset()
    })
    .catch(error => {
        console.log(error.message);
    })
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <form onSubmit={handleRegister} className="">
        <div className="">
          <h1 className="text-5xl font-bold py-6">Please Register!</h1>
        </div>

        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                required
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
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
                name="password"
                placeholder="password"
                required
                className="input input-bordered"
              />
              
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Submit</button>
            </div>
            <div className="mt-5">
            <label className="label">
                <Link  to={'/login'} className="label-text-alt link link-hover">
                   Already have an account.
                </Link>
              </label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
