import axios from 'axios';

const AxiosBaseClient = axios.create({
    baseURL: process.env.BACKEND_,
});

export default AxiosBaseClient;
