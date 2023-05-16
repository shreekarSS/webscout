import React from 'react'
import "./primaryBtn.scss"
const PrimaryBtn = ({text, theme, onClick}) => {

  return (
    <button className={`primaryBtn ${theme}`} onClick={onClick}>
      {text}
    </button>
  )
}

export default PrimaryBtn;