import React from 'react'
import "./navbar.scss";
const Navbar = () => {
    return (
        <nav>
            <div className='container'>
                <div className='navbar'>
                    <div>
                        <h2> <a href="/">WebScout</a></h2>
                    </div>
                    <div>
                        <a href="/login">Login</a>
                    </div>
                    <div>
                    <a href="/signup">Register</a>
                    </div>
                    <div>
                    <a href="/adminlogin">Admin Login</a>
                    </div>
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