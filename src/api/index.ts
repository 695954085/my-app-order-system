import axios from 'axios';

export const requestLogin = (params: LoginParams) => axios.post(`http://localhost:3000/dologin`, params);
