import React, {useState} from 'react'
import Textbox from '../../common/textbox/textbox'
import Navbar from './SellerNavBar'
import PrimaryBtn from '../../common/button/primaryBtn'
import './SellerHome.scss'
import ListItem from '../../common/list-item/ListItem'
import { v4 as uuidv4 } from 'uuid';


const initialList = [ {}, {}];

const SellerHome = () => {
  
  const [list, setList] = React.useState(initialList);
  const [name, setName] = React.useState('');

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleAdd() {
    const newList = list.concat({ name, id: uuidv4() });

    setList(newList);

    setName('');
  }

const [values, setValues] = useState({'Name':'', 'Cost':'', 'Description':"", 'Address':"", 'Files':"", 'Phone':"", 'ContactEmail':""});
    const Submit = 'Submit';
    const [submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        if(values.Name, values.Cost, values.Address, values.Description, values.Phone, values.ContactEmail, values.Files)
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
      <Navbar/>
    <div className='form-container'>
        <form className='seller-home-form' onSubmit={handleSubmit}>
          <button className='manage-my-listings'>Manage my Lisitings</button>&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; 
          <button className='create-listing' onClick={() => window.location.href = '/createlisting'}>Create a listing</button>
          <ListItem/>
          <input className='offer' type='text' value={name} onChange={handleChange} placeholder='Offer is made by buyer. Edit to make a counter offer'></input>
          <button className='approve-btn' onClick={handleAdd}>Accept Offer</button> &nbsp;&nbsp;
          {/* &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;  */}
          <button className='reject-btn'>Reject Offer</button> &nbsp;&nbsp;
          {/* &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;  */}
          <button className='renegotiate-btn'>Renegotiate</button>
           {/* &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;   */}
          {submitted && valid ? <div className='success-message'>Success! Thank you for lisiting!</div> : null}
            
       
        {/* <button class-name = 'update-btn' type = "submit">Update Listing</button> */}
       
           
        </form>
        {/* <ul>
        {list.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul> */}
</div>
    </div>
  )
};

const AddItem = ({ name, onChange, onAdd }) => (
  <div>
    <input type="text" value={name} onChange={onChange} />
    <button type="button" onClick={onAdd}>
      Add
    </button>
  </div>
);

const List = ({ list }) => (
  <ul>
    {list.map((item) => (
      <li key={item.id}>{item.name}</li>
    ))}
  </ul>
);

export default SellerHome