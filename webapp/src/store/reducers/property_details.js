import { GETPROPERTY,GETAPPROVEDPROPERTIES } from "../mutation-types";

const initState = [];

//Get PROPERTY
const Propertydetails = (state=initState, action) => {
  switch (action.type) {
    case GETPROPERTY:
      return { ...state, ...action.payload };
    case GETAPPROVEDPROPERTIES:
        return { ...state, ...action.payload };
      
    default:
      return { ...state };
  }
};

export default Propertydetails;