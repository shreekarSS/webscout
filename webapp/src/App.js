import './App.css';
import Home from './pages/home/Home';
import Signup from './pages/signup/Signup';
import Navbar from './common/navbar/Navbar';
import Login from './pages/login/Login';
import Buyer from './pages/buyer/Buyer';
import Admin_login from './pages/admin/Admin_login';
import Admin_home from './pages/admin/Admin_home';
import CreateListing from './pages/seller/CreateListing';
import EditListing from './pages/seller/EditListing';
import SellerHome from './pages/seller/SellerHome';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"
import Buyer_favourite from './pages/buyer/BuyerFavourites';
import Buyer_Home from './pages/buyer/BuyerHome';
import Admin_manage_users from './pages/admin/Admin_manage_users';
import Properties from './pages/Properties/properites';
import BuyerViewListing from './pages/buyer/BuyerViewListing';
import Users from './pages/users/users';

const App = () => {
  const { user } = useSelector((state => state.user))
  console.log(user);
  return (
    <Router>
      <div className='webapp'>
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Buyer" element={<Buyer />} />
          <Route path="/AdminLogin" element={<Admin_login />} />
          <Route path="/AdminHome" element={<Admin_home />} />
          <Route path="/CreateListing" element={<CreateListing />} />
          <Route path="/EditListing" element={<EditListing />} />
          <Route path="/BuyerFavourite" element={<Buyer_favourite />} />
          <Route path="/BuyerHome" element={<Buyer_Home/>} />
          <Route path="/SellerHome" element={<SellerHome/>} />
          <Route path="/Adminmanageusers" element={<Admin_manage_users />} />
          <Route path="/Properties" element={<Properties />} />
          

          <Route path="/BuyerViewListing" element={<BuyerViewListing/>} />

          <Route path="/users" element={<Users/>} />

                            </Routes>


      </div>
    </Router>


  );
}

export default App;
