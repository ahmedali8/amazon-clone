import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5001/clone-590aa/us-central1/api' // THE API (cloud functions) URL
});

export default instance;