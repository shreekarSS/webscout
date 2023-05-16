import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./properties.scss";

import { approveProp, getProperties } from "../../store/actions/property_actions";
const Item = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  let itemId;
  // console.log(location.pathname);

  //To get the user id
//   if (location.pathname.includes("/")) {
//     const string = location.pathname.split("/");
//     itemId = string[string.length - 1];
//   }

  //Refresh the page on change
  useEffect(() => {
    dispatch(getProperties());
  }, [dispatch, location]);
  
  const data = useSelector((state) => state);
  
 // const { files } = data;
  // console.log(files);
  console.log("hey.");
  console.log("items");
   console.log(data);


   return (
    <div className="container">
      <div className="single-item-card">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
        
            { data.properties.items &&  data.properties.items.map((j) =>
            <div key={j._id}>
                
            <p>
              Name: <span>{j.Name}</span>
            </p>
            <p>
            Admin status: <span>{j.adminStatus}</span>
            </p>
            <button className="primary-btn" onClick={() => {console.log("Triggered"); dispatch(approveProp(j._id))}}>
              Approve
            </button>
             </div>)
            
            }
     

           </div>
           </div>
           </div>
    </div>
  );
};


export default Item;
