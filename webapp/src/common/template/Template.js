import "./Template.scss";
import image from '../images/GoogleMapTA.png'
import React from "react";


const Template = ({items}) => {

 
  return (
    <div className="col-lg-4 col-md-4 col-sm-12">
      <div className="template">
          <div className="template-img">
            <img src={image} alt='Sample pic'/>
          </div>
        

          <div className="template-desc">
          <p>Description: {items.desc}</p>

            <p className="ItemPrice">
            <p> Cost: {items.cost}</p>

            </p>
            <p className="TemplateModel"> Build Area: {items.buildArea}</p>

          </div>
          <div className="TemplateFooter">
            <span>Name: {items.Name} </span>
            <span>Address: {items.address} </span>
          </div>
      </div>
    </div>
  );
};

export default Template;
