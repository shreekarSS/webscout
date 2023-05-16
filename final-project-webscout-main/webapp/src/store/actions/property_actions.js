import { GETPROPERTIES, CREATEPROPERTY,GETAPPROVEDPROPERTIES, GETSEARCHPROPERTIES, APPROVEPROPERTY, DELETEPROPERTY } from "../mutation-types";
import { fetchProperties, createProperty, fetchPropertiesBySearch, approveProperty,fetchApprovedProps, deleteProperty } from "../../api";

//Get Properties
export const getProperties = () => async (dispatch) => {
  try {
    const { data } = await fetchProperties();
    dispatch({
      type: GETPROPERTIES,
      payload: {
        items: data,
      },
    });
  } catch (err) {
    console.log(err.message);
  }
};

export const getApprovedProperties = () => async (dispatch) => {
  try {
    const { data } = await fetchApprovedProps();
    dispatch({
      type: GETAPPROVEDPROPERTIES,
      payload: {
        items: data,
      },
    });
  } catch (err) {
    console.log(err.message);
  }
};

//Search Properties
export const getPropertiesBySearch = (searchQuery) => async (dispatch) => {
  const { searchText } = searchQuery;
  console.log(searchText);
  try {
    const { data } = await fetchPropertiesBySearch(searchText);
    dispatch({
      type: GETSEARCHPROPERTIES,
      payload: {
        items: data,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

//Create Property
export const addProperty = (item) => async (dispatch) => {
  try {
    const { data } = await createProperty(item);
    console.log(data);
    dispatch({
      type: CREATEPROPERTY,
      payload: data,
    });
  } catch (err) {
    console.log(err.response.data);
  }
};


// apprrove property

export const approveProp = (id) => async (dispatch) => {
  try {
    console.log(id);
    const { data } = await approveProperty(id);
    console.log(data);
    dispatch({
      type: APPROVEPROPERTY,
      payload: data,
    });
  } catch (err) {
    console.log(err.response.data);
  }
};


export const deleteProp = (id) => async (dispatch) => {
  try {
    console.log(id);
    const { data } = await deleteProperty(id);
    console.log(data);
    dispatch({
      type: DELETEPROPERTY,
      payload: data,
    });
  } catch (err) {
    console.log(err.response.data);
  }
};

