import axios from 'axios';
import * as dotenv from 'dotenv';

dotenv.config();

const AxiosGithubClient = axios.create({
    baseURL: process.env.GITHUB_API_URL,
    headers: {
        'Accept': 'application/vnd.github.v3+json',
    },
});

export default AxiosGithubClient;
