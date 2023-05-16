import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./Admin_manage_users.scss";

import { getUsers } from "../../store/actions/user_actions";
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
    dispatch(getUsers());
  }, [dispatch, location]);
  const data = useSelector((state) => state.user_actions);
  
 // const { files } = data;
  // console.log(files);
  console.log("hey.");
  console.log("items");
   console.log(data);
//    const {items}  = data;
//    console.log(items);

   return (
    <div className="container">
      <div className="single-item-card">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
        
            {/* { data.items &&  data.items.map((j) =>
            <div>
                
            <p>
              Name: <span>{j.name}</span>
            </p>
            <p>
            email: <span>{j.email}</span>
            </p>
            <p>
            Contact Phone: <span>{j.phone}</span>
      </p>
                </div>)
            
            } */}

           </div>
           </div>
           </div>
    </div>
  );
};


export default Item;
