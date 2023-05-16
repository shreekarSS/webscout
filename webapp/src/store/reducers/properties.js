import { GETPROPERTIES, CREATEPROPERTY, GETSEARCHPROPERTIES ,GETUSERPROPERTIES, APPROVEPROPERTY,GETAPPROVEDPROPERTIES} from "../mutation-types";


  const initState = {
    items: [],
  };
  
  const properties = (state = initState, action) => {
    switch (action.type) {
      case GETPROPERTIES:
        return {
          ...state,
          ...action.payload,
        };
      case GETSEARCHPROPERTIES:
        return {
          ...state,
          ...action.payload
        };
      case CREATEPROPERTY:
        return {
          ...state,
          ...action.payload,
        };
      case GETUSERPROPERTIES:
        return {
          ...state,
          ...action.payload,
        };

      case APPROVEPROPERTY:
        return state.items.map((post) => (post._id === action.payload._id ? action.payload : post));
        
      case GETAPPROVEDPROPERTIES:
          return { ...state, ...action.payload };
        
      default:
        return state;
    }
  };
  
  export default properties;