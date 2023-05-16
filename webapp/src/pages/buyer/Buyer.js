import React, { useState, useEffect } from 'react'
import Navbar from '../../common/navbar/Navbar'
import GoogleMapReact from "google-map-react";
import "./Buyer.scss"
const Buyer = () => {
  //const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});
  const [childClicked, setChildClicked] = useState(null);
  const coordinates = { lat: 42.3398067, lng: -71.0913604 };
  return (
    <div className='map'>
      <GoogleMapReact
        bootstrapURLKeys={{key: 'xxxxxxxxxxxxxxxxxxxxx'}}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]} 
        options={''}
        onChange={''}
        onChildClick={''}
      />
    </div>

  )
}

export default Buyer
