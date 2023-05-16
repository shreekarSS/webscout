import { Grid, Container, Row, Col } from 'react-grid-system';
import Navbar from '../../common/navbar/Navbar'
import ListItem from '../../common/list-item/ListItem'
import PrimaryBtn from '../../common/button/primaryBtn'
import './BuyerHome.scss'
import BuyerNavBar from './components/BuyerNavBar'
import Template from '../../common/template/Template'
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { approveProp, getApprovedProperties } from "../../store/actions/property_actions";
import GoogleMapReact from "google-map-react";

const BuyerHome = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const coordinates = { lat: 42.3398067, lng: -71.0913604 };

  useEffect(() => {
    dispatch(getApprovedProperties());
  }, [dispatch, location]);
  
  const data = useSelector((state) => state);
  const [mapView, setMapView] = useState(false);
  const [modal, setModal] = useState(null);
  console.log(data.properties.items);
  
  return (
    <div className='MainPageContainer'>
      <div className='BuyerHomeNavBar'>  
          <BuyerNavBar setMapView ={setMapView}/>
      </div>
      <div className='row'>
        { !mapView && data.properties.items &&  data.properties.items.map((j) =>
    <div key={j._id}>
          <Template items={j} />
          <button className="primary-btn" onClick={() => {{alert("Please contact "+j.phone)}}}>
              BUY
            </button>

     </div>)
    
    }

{data.properties.items &&  data.properties.items.map(item => {
                    <img src="https://image.shutterstock.com/image-vector/home-icon-600w-160210421.jpg" style={{width: 50, height: 50}} lat={item.lat} lng={item.lng}/>
                })}

    {mapView && 
              <div className='MapViewBoxBuyer'> 

              <GoogleMapReact
              bootstrapURLKeys={{key: 'AIzaSyDogLHNgNA6baqGzy-D1pByVajYn8IkCFo'}}
              defaultCenter={coordinates}
              center={coordinates}
              defaultZoom={14}
              margin={[50, 50, 50, 50]} 
              >

                {data.properties.items &&  data.properties.items.map(item => {
                    return <img src="https://image.shutterstock.com/image-vector/home-icon-600w-160210421.jpg" style={{width: 50, height: 50}} 
                    lat={item.lat} 
                    lng={item.lng}
                    onClick={() => setModal(item)}
                    />
                })}

                  {/* //[].map(item => <img .... lat={Item.lat} lng={Item.lng} onClick={() => item._id}/>) */}

                  

                  </GoogleMapReact>
        </div>
    }

{modal && <div className='modal'>
  <Template items={modal} />
  <button className="primary-btn" onClick={() => {{alert("Please contact "+modal.phone)}}}>
              BUY
            </button>
</div>
}

      </div>
      
  </div>
  )
}

export default BuyerHome