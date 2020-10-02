import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.evino.com.br/catalog/v2/'

});

export default api;