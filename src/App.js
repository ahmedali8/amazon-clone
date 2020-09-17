import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Login from './components/Login';
import Orders from './components/Orders';
import { auth } from './firebase/firebaseConfig';
import { useStateValue } from './context/StateProvider';
import FlipMove from 'react-flip-move';
import Payment from './components/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import './App.css';

const promise = loadStripe(
    'pk_test_51HRvOVCWzEzHqhesijxwveJ8duEwMcdz5gAWzISoaxR78EKfIjQlbyeqsb8x0dirujij4rYfPIiy7vzeD5GmFWOH00iK8o2BgX'
);

function App() {

    const [, dispatch] = useStateValue();

    useEffect(() => {
        // will run only once when the app component loads...

        auth.onAuthStateChanged(authUser => {
            console.log('THE USER IS >>>', authUser);

            if (authUser) {
                // the user just logged in / was logged in

                dispatch({
                    type: 'SET_USER',
                    user: authUser
                });

            } else {
                // the user is logged out

                dispatch({
                    type: 'SET_USER',
                    user: null
                });
            }
        })


    }, [dispatch]);

    return (
        <Router>
            <FlipMove appearAnimation="fade" enterAnimation="fade" leaveAnimation="fade">
                <div className='app'>

                    <Routes>
                        <Route
                            path='/'
                            element={
                                <>
                                    <Header />
                                    <Home />
                                </>
                            }
                        />

                        <Route
                            path='/checkout'
                            element={
                                <>
                                    <Header />
                                    <Checkout />
                                </>
                            }
                        />

                        <Route
                            path='/payment'
                            element={
                                <>
                                    <Header />
                                    <Elements stripe={promise} >
                                        <Payment />
                                    </Elements>
                                </>
                            }
                        />

                        <Route
                            path='/login'
                            element={<Login />}
                        />

                        <Route
                            path='/orders'
                            element={<Orders />}
                        />
                    </Routes>

                </div>
            </FlipMove>
        </Router>
    );
}

export default App;
