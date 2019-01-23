import axios from 'axios';

export const requestLogin = (params: LoginParams) => axios.post(`http://localhost:3000/dologin`, params);

export const requestLoginByToken = (token: string) => axios.post(`http://localhost:3000/dologinbytoken`, token);
