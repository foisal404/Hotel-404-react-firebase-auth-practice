import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../../provider/AuthProvider";

const Header = () => {
  const {user}=useContext(authContext)
  return (
    <div>
      <div className="navbar bg-neutral text-neutral-content">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            
          </div>
          <a className="btn btn-ghost normal-case text-xl">Hotel 404</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            
              <Link className="mx-6" to='/'>Home</Link>
              <Link className="mx-6"  to='/login'>Login</Link>
              <Link className="mx-6"  to='/register'>Register</Link>
            
            
          </ul>
        </div>
        <div className="navbar-end">
          {
            user? <p>{user.email}</p>:""
          }
          <a className="btn">Get started</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
