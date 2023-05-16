import React from 'react'
import { Grid, Container, Row, Col } from 'react-grid-system';
//import Navbar from '../../common/navbar/Navbar'
import ListItem from '../../common/list-item/ListItem'
import PrimaryBtn from '../../common/button/primaryBtn'
import './BuyerViewListing.scss'
import BuyerNavBar from './components/BuyerViewNavBar'
import GoogleMapReact from "google-map-react";
import Item from '../admin/Admin_manage_users';
import Template from '../../common/template/Template'

const BuyerViewListing = () => {
    const Favourite = "Mark Favourite"
    const SendOffer = "Send Offer"
    const coordinates = { lat: 42.3398067, lng: -71.0913604 };
  return (
     
    // Use selector, to query from redux
    <div className='MainPageContainer'>
        <nav>
          Nav bar
        </nav>
         <div className='BuyerHomeNavBar'>
            <BuyerNavBar/>
        </div>
        <div className='ListContainer'>
            <div className='ListItemCard'>
            {/* <Template/> */}
                
            </div>
            <div className='GridListing'>
                <div> <PrimaryBtn text={Favourite}/> </div>                  
                <div> <PrimaryBtn text={SendOffer}/> </div>

            </div>



        </div>
        <div className='MapViewBox'> 
                <GoogleMapReact
                bootstrapURLKeys={{key: 'AIzaSyDogLHNgNA6baqGzy-D1pByVajYn8IkCFo'}}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]} 
                >

                    {/* //[].map(item => <img .... lat={Item.lat} lng={Item.lng} onClick={() => item._id}/>) */}

                    <img src="https://image.shutterstock.com/image-vector/home-icon-600w-160210421.jpg" style={{width: 50, height: 50}} lat={42.3398067} lng={-71.0913604}/>

                    </GoogleMapReact>
          </div>
         
  </div>
  )
}

export default BuyerViewListing