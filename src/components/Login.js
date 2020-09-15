import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { auth } from '../firebase/firebaseConfig';

import '../css/Login.css';

const Login = () => {

    let history = createBrowserHistory();
    let navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = (e) => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push('/')
                navigate('/')
            })
            .catch(error => alert(error.message))

    }

    const register = (e) => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // it successfully created a new user with email and password
                if(auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }

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
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <h5>Password</h5>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button type="submit" onClick={login} className='login__signInButton'>Sign In</button>
                </form>

                <p>
                    By continuing, you agree to FAKE CLONE AMAZON'S Conditions of Use and Privacy Notice.
                </p>

                <button type="submit" onClick={register} className='login__registerButton'>Create your Amazon Account</button>
            </div>
        </div>
    );
};

export default Login;
