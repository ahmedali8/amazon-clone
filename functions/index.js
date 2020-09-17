const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51HRvOVCWzEzHqhesPfBCpxwVqJ2hpJfv0r8dpmw4QoBDQBLKOtcYXI53MIkcdQ5F52DEhBSskl2kxiCs5hnO53hV00dhRrVR2K');


// API

// - App Config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));   // like a security
app.use(express.json());             // send data in a json format

// - APIRoutes
app.get('/', (request, response) => response.status(200).send('hello world'));

// sending post request
app.post('/payments/create', async (request, response) => {
    const total = request.query.total; // getting the query param from payments.js

    console.log('Payment request recieved >>>', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "usd"
    });

    // OK - Created -> 201
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

// - Listen commands
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/clone-590aa/us-central1/api