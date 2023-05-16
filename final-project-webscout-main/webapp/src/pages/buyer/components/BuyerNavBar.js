import React from 'react'
import "./BuyerNavBar.scss";
import { logout } from '../../../store/actions/user_actions';
import { useDispatch } from 'react-redux';
import PrimaryBtn from '../../../common/button/primaryBtn';
import { useNavigate } from 'react-router-dom';

const Navbar = ({setMapView}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <nav>
            <div className='container'>
                <div className='navbar'>
                    <div>
                        <h2>WebScout</h2>
                    </div>
                    <div>
                    <PrimaryBtn text={"List View"} onClick={() => setMapView(false)}/>
                    </div>
                    <div>
                    <PrimaryBtn text={"Create listing"} onClick={() => window.location.href = '/createlisting'}/>
                    </div>
                    <div>
                    <PrimaryBtn text={"MapView"} onClick={() => setMapView(true)}/>
                    </div>
                    <PrimaryBtn text={"Logout"} onClick={() => dispatch(logout(navigate))}/>
                    <div className='user-details'>
                        <div>
                            <p>Welcome!</p>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar