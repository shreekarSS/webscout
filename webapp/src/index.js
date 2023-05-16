import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './common/Variables.scss'
import { Provider } from 'react-redux'
import thunk from "redux-thunk";
import reducers from './store/reducers';
import userReducer from "./store/reducers/user";
import propertyReducer from "./store/reducers/properties"
import adminReducer from "./store/reducers/admin_actions"
import { applyMiddleware, compose } from 'redux';
import {configureStore} from "@reduxjs/toolkit"
//Create store
const store = configureStore({reducer: {
  user: userReducer,
  properties: propertyReducer,
  admin: adminReducer
}})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <Provider store={store}>
    <App />
   </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
