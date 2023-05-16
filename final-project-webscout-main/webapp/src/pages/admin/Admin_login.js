import React from 'react'
import Navbar from '../../common/navbar/Navbar'
import Textbox from '../../common/textbox/textbox'
import PrimaryBtn from '../../common/button/primaryBtn'
import "./Admin_login.scss"
import { adminLogin } from "../../store/actions/admin_actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Admin_login = () => {
    const fields = ["username", "password"];
    const Login= "Login"
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [name, setName] = React.useState('');
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
  return (
    <div className='container'>
    <div className='admin-logincontainer'>
        <h2> ADMIN LOGIN</h2>
        <div className='admin-login-form'>
            {/* {fields.map((f) => (
                <div className='inputelementadminlogin' key={f}>
                    <Textbox name={f} />
                </div>
            ))} */}
                        <div className='inputelementadminlogin' key="username">
                        <Textbox name="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                    </div>

<div className='inputelement' key="Password">
                        <Textbox name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                <PrimaryBtn text={Login} onClick={() => {
                  // Maybe do validation here
                  dispatch(adminLogin({
                    username,
                    password
                  }, navigate));
                  console.log('Clicked login submit', username,password)
                }}/>        </div>
    </div>
</div>
  )
}

export default Admin_login