import React from 'react'
import Textbox from '../../common/textbox/textbox'
import "./Signup.scss"
import PrimaryBtn from '../../common/button/primaryBtn';
import { GoogleLogin } from "react-google-login";
import Navbar from '../../common/navbar/Navbar'
import { signup } from '../../store/actions/user_signup';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// for normal sign up
const Signup = () => {
    const fields = ["Name", "Email", "Password", "Phone"]
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [signupMessage, setSignupMessage] = React.useState('');

    const googleSignupFailure = (err) => {
        console.log(err);
        console.log("Google Sign In was unsuccessful. Try again.");
      };

      // for google sign up
      const googleSignupSuccess = async (res) => {
        console.log(res);
        const result = res?.profileObj;
        const logged_user = {
          email: result.email,
          imageUrl: result.imageUrl,
          name: result.name,
          userId: result.googleId,
        };

        const token = res?.tokenId;
        console.log(res);

        dispatch(signup({
          name: result.name,
          email: result.email,
          phone: "",
          password: result.googleId
        } ,navigate));
        setSignupMessage("Thank you for signing up, you can now login");

    };
    const Signup = "Signup"
    return (
      <div>
        <Navbar />
        <div className='container'>
          <h2 className='heading'>Register</h2>
            <div className='signupcontainer'>
                <div className='signup-form'>

                <div className='inputelement' key="Name">
                        <Textbox name="Name" value={name} onChange={(e) => setName(e.target.value)}/>
                    </div>

                    <div className='inputelement' key="Email">
                        <Textbox name="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>

<div className='inputelement' key="Password">
                        <Textbox name="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>

<div className='inputelement' key="Phone">
                        <Textbox name="Phone" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                    </div>                                                            

                <div>{signupMessage}</div>

                <PrimaryBtn text={Signup} onClick={() => {
                  // Maybe do validation here
                  dispatch(signup({
                    name,
                    email,
                    phone,
                    password
                  }, navigate));
                  setSignupMessage("Thank you for signing up, you can now login");  
                  console.log('Clicked submit', name, email, phone, password)
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
                  onSuccess={googleSignupSuccess}
                  onFailure={googleSignupFailure}
                  cookiePolicy="single_host_origin"
                />
                </div>
            </div>
        </div>
        </div>
    )
}

export default Signup