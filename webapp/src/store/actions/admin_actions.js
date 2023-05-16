
import { LOGIN_ADMIN } from "../mutation-types";
import { adminSignin } from "../../api";


export const adminLogin = (formData, navigate) => async (dispatch) => {
    try {
        console.log(formData);
        const {data}  = await adminSignin(formData);
        console.log(data);
        dispatch({ type: LOGIN_ADMIN, data });
        navigate("/AdminHome");

    } catch (err) {

        console.log(err.response.data);
    }
    };