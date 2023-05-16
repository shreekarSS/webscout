import { LOGIN_USER ,GETUSERS, GETPROPERTIES, LOGOUT_ADMIN, LOGOUT_USER} from "../mutation-types";
import { fetchUsers, fetchProperties, signIn } from "../../api/index";

//User login
export const login = (resData, navigate) => async (dispatch) => {
  try {
    console.log(resData);

    const {data} = await signIn(resData);
    // TO DO - use axios/fetch to login user
    if (data?.token) {
    dispatch({ type: LOGIN_USER, data });
    navigate("/buyerhome");
    }
    else {
      alert("The given username/password is incorrect");
    }

    //for logout
    // dispatch({ type: LOGOUT_USER});

    //TO DO - redirect to buyer home page
    
  } catch (err) {
    console.log(err.response.data);
  }
};


export const logout = (navigate) => async (dispatch) => {
  try {
    

    
    dispatch({ type: LOGOUT_USER });
    dispatch({ type: LOGOUT_ADMIN });
    navigate("/");

    //for logout
    // dispatch({ type: LOGOUT_USER});

    //TO DO - redirect to buyer home page
    
  } catch (err) {
    console.log(err.response.data);
  }
};


// get all users
export const getUsers = () => async (dispatch) => {
  try {


    const { data } = await fetchUsers();
    console.log("getting data");
    console.log(data);

    dispatch({
      type: GETUSERS,
      payload: {
        items: data,
      },
    });
  } catch (err) {
    console.log(err.message);
  }
};


