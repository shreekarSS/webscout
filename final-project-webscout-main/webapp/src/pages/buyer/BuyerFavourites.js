import React from 'react'
import { Container, Row, Col } from 'react-grid-system';
import ListItem from '../../common/list-item/ListItem'
import PrimaryBtn from '../../common/button/primaryBtn'
import './BuyerFavourites.scss'
import BuyerFavNavBar from './components/BuyerFavNavBar'


const BuyerFavourite = () => {
  
  return (
    <div className='MainPageContainer'>
      <div className='BuyerFavNavBar'>
      <BuyerFavNavBar/>
      </div>
    <div className='GridListing'>
      <div className='internal'>
        <ListItem/>
        <ListItem/>
        <ListItem/>
      </div>
    </div>
  </div>
  )
}

export default BuyerFavourite