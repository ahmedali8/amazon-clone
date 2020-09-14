import React from 'react';
import { Link } from 'react-router-dom';

import '../css/Login.css';

const Login = () => {
    return (
        <div className='login'>
            <Link to="/">
                <img 
                    className='login__logo'
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
                    alt=''
                />
            </Link>

            <div className='login__container'>
                <h1>Sign In</h1>

                <form>
                    <h5>Email</h5>
                    <input type="text" />

                    <h5>Password</h5>
                    <input type="password" />

                    <button className='login__signInButton'>Sign In</button>
                </form>

                <p>
                    By continuing, you agree to FAKE CLONE AMAZON'S Conditions of Use and Privacy Notice.
                </p>

                <button className='login__registerButton'>Create your Amazon Account</button>
            </div>
        </div>
    );
};

export default Login;
