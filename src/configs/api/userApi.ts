import { ILoginParams } from 'models/auth';
import { Country } from 'models/country';
import { CreateUserParams, IUserParams } from 'models/user';
import axiosClient from './axiosClient';

const userApi = {
  login(params: ILoginParams) {
    const url = '/api/authentication/login';
    return axiosClient.post(url, params);
  },
  getAll(params: IUserParams) {
    const url = '/apiAdmin/users/list';
    return axiosClient.post(url, params);
  },
  getRole() {
    const url = '/apiAdmin/commons/role';
    return axiosClient.get(url);
  },
  getCountry() {
    const url = '/apiAdmin/commons/country';
    return axiosClient.get(url);
  },
  getState(params: Country) {
    const url = '/apiAdmin/commons/state';
    return axiosClient.post(url, params);
  },

  createUser(params: CreateUserParams) {
    const url = '/apiAdmin/users/create';
    return axiosClient.post(url, params);
  },
  showDetail(id: string) {
    const url = '/apiVendor/profile/detail';
    return axiosClient.post(url, id);
  },
};

export default userApi;
