import axios from 'axios';
import { store } from '../reducers/index';
import { Vendor } from '../types/components/vendor/AddVendor';

const token = store.getState().loginByUserName.token;
export const requestLogin = (params: LoginParams) =>
  axios.post(`http://localhost:3000/dologin`, params);

export const requestLoginByToken = (params: { token: string }) =>
  axios.post(`http://localhost:3000/dologinbytoken`, params);

export const requestAddVendor = (params: Vendor) =>
  axios.post(`http://localhost:3000/v1/vendor`, params, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  });

export const fetchVendorData = () =>
  axios.get(`http://localhost:3000/v1/vendor`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  });
