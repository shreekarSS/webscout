import Navbar from '../../common/navbar/Navbar'
import ListItem from '../../common/list-item/ListItem'
import PrimaryBtn from '../../common/button/primaryBtn'
import "./Admin_home.scss"
import { approveProp, getProperties, deleteProp } from "../../store/actions/property_actions";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Template from '../../common/template/Template';
import { logout } from '../../store/actions/user_actions';
import { useNavigate } from "react-router-dom";
const Admin_home = () => {
    const Approve= "Approve"
    const Reject= "Reject"
    const ManageUsers= "ManageUsers"
    const location = useLocation();
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getProperties());
    }, [dispatch, location]);
    
    const data = useSelector((state) => state);
    const navigate = useNavigate();
 
    
  return (
    <div className='container'>
        <div className='adminhomecontainer'>
        <PrimaryBtn text={"Logout"} onClick={() => dispatch(logout(navigate))}/>
        <h2> Manage Listings</h2>
        <div className='managelistings'>
        {data.properties.items &&  data.properties.items.map((j) =>
            <div key={j._id}>
                
           <Template items={j}/>
           {j.adminStatus === 'PENDING' &&
            <button className="primary-btn" onClick={() => {
              console.log("Triggered"); 
              alert("Action recorded"); 
              dispatch(approveProp(j._id)); 
              setTimeout(() =>  {window.location.href = '/adminhome'} , 2000);}}>
              Approve
            </button>
          } 

<button className="primary-btn" onClick={() => {
              console.log("Triggered delete"); 
              dispatch(deleteProp(j._id)); 
              setTimeout(() =>  {window.location.href = '/adminhome'} , 2000);}}>
              Delete
            </button>

{j.adminStatus === 'Approved' &&'APPROVED'} 
             </div>)
            
            }

        </div>
</div>


    </div>

  )
}

export default Admin_home