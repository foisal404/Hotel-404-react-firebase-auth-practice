import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            
          </div>
          <form className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name="email" className="input input-bordered" required/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Display name</span>
                </label>
                <input type="text" placeholder="Display name" name="name" className="input input-bordered" required/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required/>
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input type="password" placeholder="Confirm password" name="confirm" className="input input-bordered" required/>
                <label className="label">
                  <span>
                    Already have a account? go to <Link className="text-orange-600" to='/login'>Login</Link>
                  </span>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
