import axios from 'axios';

export const requestLogin = (params: LoginParams) =>
  axios.post(`http://localhost:3001/dologin`, params);

export const requestLoginByToken = (params: { token: string }) =>
  axios.post(`http://localhost:3001/dologinbytoken`, params);
