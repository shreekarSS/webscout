import React from 'react'
import Textbox from '../../common/textbox/textbox'
import Navbar from '../../common/navbar/Navbar'
import PrimaryBtn from '../../common/button/primaryBtn'
import "./Login.scss"
import { GoogleLogin } from "react-google-login";
import { login } from '../../store/actions/user_actions'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// for normal login
const Login = () => {
    const fields = ["Email", "Password"];
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');


    const Login = "Login"
    const googleLoginFailure = (err) => {
        console.log(err);
        console.log("Google Sign In was unsuccessful. Try again.");
    };

    // for google login
    const googleLoginSuccess = async (res) => {
        console.log(res);
        const result = res?.profileObj;
        const logged_user = {
            email: result.email,
            imageUrl: result.imageUrl,
            name: result.name,
            userId: result.googleId,
        };
        const token = res?.tokenId;
        console.log(result);

        dispatch(login({
            email: result.email,
            password: result.googleId
          }, navigate));
    };

    return (
        <div>
            <Navbar />

            <div className='container'>
            <h1 className='heading'> Welcome to WebScouts! </h1>
                <div className='logincontainer'>
                    <div className='login-form'>

                    <div className='inputelement' key="Email">
                        <Textbox name="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>

<div className='inputelement' key="Password">
                        <Textbox name="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>

                        <PrimaryBtn text={Login} onClick={() => {
                  // Maybe do validation here
                  dispatch(login({
                    email,
                    password
                  }, navigate));
                  console.log('Clicked login submit', email,password)
                }}/>
                        <GoogleLogin
                            clientId="346605048474-u07ddfekggkt4jpavv2uir6dr574rkjl.apps.googleusercontent.com"
                            render={(renderProps) => (
                                <button
                                    className="primaryBtn google-btn"
                                    onClick={renderProps.onClick}
                                    disabled={renderProps.disabled}
                                >
                                    Google Sign In
                                </button>
                            )}
                            onSuccess={googleLoginSuccess}
                            onFailure={googleLoginFailure}
                            cookiePolicy="single_host_origin"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login