// lib/axios.ts

import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8081/code-chronicles/api', // Replace with your API base URL
    timeout: 1000,
    /*headers: {'X-Custom-Header': 'foobar'}*/
});

export default instance;
