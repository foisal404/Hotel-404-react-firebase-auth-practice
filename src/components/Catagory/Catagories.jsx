import React from "react";
import { FaBed,FaUserFriends } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Catagories = ({ data }) => {
  const { id, details, package_name, bed_amount, people, image_url } = data;
  return (
    <div className="w-96 p-3 m-8 border-2 rounded-md">
      <img className="w-100 mx-auto" src={image_url} alt="" />
      <div className="flex flex-col ">
        <div >
          <p className="text-xl font-semibold">{package_name}</p>
          <p>{details}</p>
        </div>
        <div className="flex me-0">
          <p className="flex items-center gap-2 pe-5"><FaBed/> {bed_amount}</p>
          <p className="flex items-center gap-2 pe-5"><FaUserFriends/>{people}</p>
          <button className="btn btn-secondary"><Link to='/cart'>Go to cart</Link></button>
        </div>
      </div>
    </div>
  );
};

export default Catagories;
