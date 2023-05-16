import React from 'react'
import "./listItem.scss"
const ListItem = () => {
    return (
        <div className='card'>
            <div className='card-container'>
                <div className='card-img-container'>
                    <img className='card-img' src="	https://photos.zillowstatic.com/fp/9d7c583c5ad64729f9b18817ca178536-cc_ft_768.webp" alt='Card' />
                </div>
                <div className='card-desc'>
                    <p>Lorem ipsum init</p>
                </div>
                <div className='card-price'>
                    <p className='cost'>$3000</p>
                    <p className='sqft'>450 Sq. Ft</p>
                </div>
            </div>
        </div>
    )
}

export default ListItem