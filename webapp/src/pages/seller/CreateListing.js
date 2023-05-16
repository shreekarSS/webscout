import React, {useState} from 'react'
import Textbox from '../../common/textbox/textbox'
import Navbar from '../../common/navbar/Navbar'
import PrimaryBtn from '../../common/button/primaryBtn'
import AddressInput from '../../common/address/addressInput'
import SellerNavBar from './SellerNavBar'

import './CreateListing.scss'

import { addProperty } from "../../store/actions/property_actions";
import { useDispatch, useSelector } from "react-redux";

const CreateListing = () => {
    const [values, setValues] = useState({'Name':'', 'cost':'', 'desc':"", 'address':"", 'beds':"", 'zipcode': '', 'baths': "",'files':['fvrgeththty6'], 'phone':"", 'contactEmail':"", 'buildArea':''});
    const Submit = 'Submit';
    const [submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState(false);
    const dispatch = useDispatch();

    const handleNameInputChange = (event) => {
        setValues({...values, Name: event.target.value})
    }

    const handleBedsInputChange = (event) => {
        setValues({...values, beds: event.target.value})
    }

    const handleBuildAreaInputChange = (event) => {
        setValues({...values, buildArea: event.target.value})
    }

    const handleBathsInputChange = (event) => {
        setValues({...values, baths: event.target.value})
    }

    const handleZipCodeInputChange = (event) => {
        setValues({...values, zipcode: event.target.value})
    }

    const handleCostInputChange = (event) => {
        setValues({...values, cost: event.target.value})
    }

    const handleDescriptionInputChange = (event) => {
        setValues({...values, desc: event.target.value})
    }

    // const handleAddressInputChange = (event) => {
    //     setValues({...values, Address: event.target.value})
    // }

    const handleFilesInputChange = (event) => {
        // setValues({...values, Files: event.target.value})
        let files = event.target.files;
        console.warn("data file", files)
    }

    const handlePhoneInputChange = (event) => {
        setValues({...values, phone: event.target.value})
    }

    const handleContactEmailInputChange = (event) => {
        setValues({...values, contactEmail: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(values.Name, values.cost, values.address, values.desc, values.phone, values.contactEmail, values.files)
            setValid(true);
        setSubmitted(true);
    }

   const  onChange = (event) => 
    {
        let files = event.target.files
        console.warn("data files",files )
    }

  return (
      <div>
          <SellerNavBar/>
      
    <div className='form-container'>
        <form className='create-listing-form' onSubmit={handleSubmit}>
            {submitted && valid ? <div className='success-message'>Success! Thank you for lisiting!
            <button className='create-listing' onClick={() => window.location.href = '/buyerhome'}>Back to buyer home</button>
            </div> : null}
            <input 
            onChange={handleNameInputChange}
            value = {values.Name} 
            className="form-field"
            placeholder="Name"
            name="name"/>
        {submitted && !values.Name ? <span>Please enter a Name</span> : null}

            <input 
            onChange={handleCostInputChange}
            value = {values.cost} 
            className="form-field"
            placeholder="Cost"
            name="cost"/>
        {submitted && !values.cost ? <span>Please enter a Cost</span> : null}
            
            <input 
            onChange={handleDescriptionInputChange}
            value = {values.desc} 
            className="form-field"
            placeholder="Description"
            name="desc"/>
        {submitted && !values.desc ? <span>Please enter a Description</span> : null}
           
            {/* <input 
            onChange={handleAddressInputChange}
            value = {values.Address} 
            className="form-field"
            placeholder="Address"
            name="address"/>
        {submitted && !values.Address ? <span>Please enter a Address</span> : null} */}
{/* 
            <input
            type="file"
            // onChange={(e)=> this.onChange(e)}
             onChange={(e) => handleFilesInputChange(e)} 
            value = {values.Files} 
            className="form-field"
            placeholder="Files"
            name="file"/>
        {submitted && !values.Files ? <span>Please enter a Files</span> : null} */}
            
            <input 
            onChange={handlePhoneInputChange}
            value = {values.phone} 
            className="form-field"
            placeholder="Phone"
            name="phone"/>
        {submitted && !values.phone ? <span>Please enter a Phone</span> : null}

            <input 
            onChange={handleContactEmailInputChange}
            value = {values.contactEmail} 
            className="form-field"
            placeholder="Email Address"
            name="email"/>
        {submitted && !values.contactEmail ? <span>Please enter a Email Address</span> : null}

        <AddressInput
        className="form-field"
        value = {values.address}  
        onPlaceLoaded={(address, lat, lng, zipcode) => setValues({...values, address, lat, lng, zipcode})}/> 
        {submitted && !values.address ? <span>Please enter an Address</span> : null}

        <input 
            onChange={handleZipCodeInputChange}
            value = {values.zipcode} 
            className="form-field"
            placeholder="zipcode"
            name="zipcode"/>
        {submitted && !values.zipcode ? <span>Please enter the Zip code</span> : null}

        <input 
            onChange={handleBedsInputChange}
            value = {values.beds} 
            className="form-field"
            placeholder="Beds"
            name="beds"/>
        {submitted && !values.beds ? <span>Please enter number of bedrooms</span> : null}

        <input 
            onChange={handleBathsInputChange}
            value = {values.baths} 
            className="form-field"
            placeholder="Bathrooms"
            name="bathrooms"/>
        {submitted && !values.baths ? <span>Please enter number of bathrooms</span> : null}

        <input 
            onChange={handleBuildAreaInputChange}
            value = {values.buildArea} 
            className="form-field"
            placeholder="Build Area in SQFT"
            name="buildArea"/>
        {submitted && !values.buildArea ? <span>Please enter the Build Area</span> : null}

        <div>
        <button
            class-name = "form-field"
            type = "submit" onClick={() => {console.log("Triggered"); dispatch(addProperty(values))}}>Register</button>
        </div>

        
           
        </form>
            {/* <div className='createListingContainer'>
                <div className='listing-form'>
                {fields.map((f) => (
                    <div className='inputelement' key={f}>
                        <Textbox name={f} />
                    </div>
                ))}
                </div>
                <PrimaryBtn text={Submit}/>
            </div> */}
</div>
        </div>
  )
}

export default CreateListing