import { LOGIN_ADMIN, LOGOUT_ADMIN } from "../mutation-types";

const auth = (state = { auth: null }, action) => {
  switch (action.type) {
    case LOGIN_ADMIN:
        console.log("sss");
      localStorage.setItem("auth", JSON.stringify({ ...action?.data }));
      return { ...state, auth: action?.data };
    case LOGOUT_ADMIN:
      localStorage.removeItem("auth");
      return { ...state, auth: null };
    default:
      return state;
  }
};

export default auth;