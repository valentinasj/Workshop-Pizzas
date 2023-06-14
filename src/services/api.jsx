import axios from 'axios';

const API_BASE = 'https://pizza-api-production.up.railway.app/users';


export const instanceAxios = axios.create({
    baseURL: API_BASE,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
})