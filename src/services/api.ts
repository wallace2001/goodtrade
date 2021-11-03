import axios from 'axios';

// Exportando a baseURL para ser mais fácil de ser utilizada no projeto
export const API = axios.create({
    baseURL: '/api/',
});