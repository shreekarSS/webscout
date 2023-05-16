import React from 'react'
import "./textbox.scss";
const Textbox = ({ name, value, onChange }) => {

    return (
        <div className='inputBox'>
            <label>{name}</label>
            <input className="inputTextbox" type="text" name={name} value={value} onChange={onChange} />
        </div>
    )
}

export default Textbox