import axios from 'axios'
import { store } from './store';

export const api = axios.create({
    baseURL: 'http://localhost:9999'
})

const apiToken = store.get('apiToken')
if(apiToken){
    api.defaults.headers.common['Authorization'] = `Bearer ${apiToken}`;
}