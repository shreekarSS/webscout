import { combineReducers } from "redux";
import user from "./user";
import properties from "./properties";
import property_details from "./property_details";
import user_actions from "./users_actions";


export default combineReducers({
    user,
    properties,
    property_details,
    user_actions

});


