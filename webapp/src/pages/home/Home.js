import React from 'react'
import Navbar from '../../common/navbar/Navbar'
// import src from "../../assets"
import pic from './house-image.jpg'


const Home = () => {
  return (
    <div>
      <Navbar />

      <div>
        <img className='house' src={pic}></img>
      </div>
      <nav>
        <div className='footer'>
          <a href="">About us </a> &nbsp;&nbsp;
          <a href='https://wwww.facebook.com'>Facebook</a>&nbsp;&nbsp;
          <a href='https://www.twitter.com'>Twitter</a>&nbsp;&nbsp;
          <a href='https://www.instagram.com'>Instagram</a>
        </div>
        <div>
        </div>
      </nav>
    </div>
  )
}

export default Home