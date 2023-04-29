import React from "react";

const Catagories = ({ data }) => {
  const { id, details, package_name, bed_amount, people, image_url } = data;
  return (
    <div className="w-96 p-3 m-8 border-2 rounded-md">
      <img className="w-100 mx-auto" src={image_url} alt="" />
      <div >
        <p className="text-xl font-semibold">{package_name}</p>
        <p>{details}</p>
        <div className="flex">
          <p>{bed_amount}</p>
          <p>{people}</p>
        </div>
      </div>
    </div>
  );
};

export default Catagories;
