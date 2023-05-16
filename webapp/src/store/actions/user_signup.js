import { signUp } from "../../api";
import { SIGNUP_USER } from "../mutation-types";



//Sign up
export const signup = (formData, navigate) => async (dispatch) => {
    try {
      console.log(" Trying to signup");
      const { data } = await signUp(formData);
      console.log(data);
      dispatch({ type: SIGNUP_USER, data });
      navigate("/Login");
    } catch (err) {
      console.log(err.response.data);
    }
  };