import { LOGIN_USER, LOGOUT_USER } from "../mutation-types";

const user = (state = { user: null }, action) => {
  switch (action.type) {
    case LOGIN_USER:
      localStorage.setItem("user", JSON.stringify({ ...action?.data }));
      return { ...state, user: action?.data };
    case LOGOUT_USER:
      localStorage.removeItem("user");
      return { ...state, user: null };
    default:
      return state;
  }
};

export default user;