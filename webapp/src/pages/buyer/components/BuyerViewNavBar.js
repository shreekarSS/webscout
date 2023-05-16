import React from 'react'
import './BuyerViewNavBar.scss'
import PrimaryBtn from '../../../common/button/primaryBtn'

const BuyerNavBar = () => {
    const listView = "List View"
    const SentOffers = "Sent Offers"
    const Favourite = "Favourites"
    return (
        <nav className='BuyerNav'>
                <div className='BuyerNavBar'>
                        <div> <PrimaryBtn text = {listView} /> </div>
                        <div> <PrimaryBtn text = {SentOffers} /> </div>
                        <div> <PrimaryBtn text={Favourite}/> </div>
                </div>
         
        </nav>
    )
}

export default BuyerNavBar