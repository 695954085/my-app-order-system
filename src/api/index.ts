import axios from 'axios';

export const requestLogin = (params: any) => axios.post(`http://localhost:3000/login`, params);
