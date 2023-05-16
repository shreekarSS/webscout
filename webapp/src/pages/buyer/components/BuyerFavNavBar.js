import React from 'react'
import './BuyerFavNavBar.scss'
import PrimaryBtn from '../../../common/button/primaryBtn'

const BuyerFavNavBar = () => {
    
    const Filters = "Filter"
    const Back = "Back"
    return (
        <nav className='BuyerFavNav'>
                <div className='BuyerFavNavBar'>
                        <div> <PrimaryBtn text={Back}/> </div>
                        <div> <PrimaryBtn text={Filters}/> </div>  
                </div>
         
        </nav>
    )
}

export default BuyerFavNavBar