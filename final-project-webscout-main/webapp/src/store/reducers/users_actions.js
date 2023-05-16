import { GETUSERS, GETPROPERTIES} from "../mutation-types";

const initState = [];

//Get all users
const details = (state=initState, action) => {
  switch (action.type) {
    case GETUSERS:
      return { ...state, ...action.payload };

    case GETPROPERTIES:
        return { ...state, ...action.payload };
    default:
      return { ...state };
  }
};

export default details;