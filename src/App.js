import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Login from './components/Login';
import { auth } from './firebase/firebaseConfig';
import { useStateValue } from './context/StateProvider';
import FlipMove from 'react-flip-move';
import Payment from './components/Payment';

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
                        <Route path='/' element={<><Header /><Home /></>} />

                        <Route path='/checkout' element={<><Header /><Checkout /></>} />

                        <Route path='/payment' element={<><Header /><Payment /></>} />

                        <Route path='/login' element={<Login />} />
                    </Routes>

                </div>
            </FlipMove>
        </Router>
    );
}

export default App;
