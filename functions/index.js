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

app.get('/ahmed', (request, response) => response.status(200).send('hello ahmed'));

// - Listen commands
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/clone-590aa/us-central1/api