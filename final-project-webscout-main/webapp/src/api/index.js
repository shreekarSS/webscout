import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:8080" });

//Set User
API.interceptors.request.use((req) => {
  if (localStorage.getItem("user")) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem("user")).token
    }`;
  }
  return req;
});

//Gets the Properties from API
export const fetchProperties = () => API.get("/properties");

//Search Properties
export const fetchPropertiesBySearch = (searchText) => {
  console.log(searchText);
  return API.get(`/properties/search?searchQuery=${searchText || "none"}`);
};

//Create an Property
export const createProperty = (newItem) => API.post("/properties", newItem);

//Get user Properties
export const fetchProperty = (id) => API.get(`/properties/${id}`);

export const deleteProperty = (id) => API.delete(`/properties/${id}`);

//Signin
export const signIn = (formData) => API.post("/users/session", formData);

//Signup
export const signUp = (formData) => API.post("/users/createUser", formData);



// Get all users
export const fetchUsers = () => API.get(`/users`);


// approve property
export const approveProperty = (id) => API.patch(`/properties/${id}`);


export const adminSignin = (formData) => API.post("/users/adminsession", formData);


// get all apprvoed properties
export const fetchApprovedProps = () => API.get("/properties/getAll");
