import React from 'react';
import Product from './Product';

import '../css/Home.css';

const Home = () => {
    return (
        <div className='home'>
            <div className='home__container'>
                <img
                    className='home__image'
                    src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
                    alt=''
                />

                <div className='home__row'>
                    <Product
                        id={54344525}
                        title='The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback'
                        price={29.99}
                        rating={3}
                        image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
                    />
                    <Product
                        id={95805}
                        title='Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl'
                        price={239}
                        rating={4}
                        image='https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg'
                    />
                </div>

                <div className='home__row'>
                    <Product
                        id={12326}
                        title="Apple Watch Series 3 (GPS, 42mm) - Space Grey Aluminium Case with Black Sport Band"
                        price={20}
                        rating={5}
                        image="https://images-eu.ssl-images-amazon.com/images/I/41RLXO5JUhL._AC_SX368_.jpg"
                    />
                    <Product
                        id={12328}
                        title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                        price={598.99}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                    />
                    <Product
                        id={12327}
                        title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                        price={98.99}
                        rating={5}
                        image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                    />
                </div>

                <div className='home__row'>
                    <Product
                        id={90829332}
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                        price={1094.98}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                    />                </div>
            </div>
        </div>
    );
};

export default Home;
