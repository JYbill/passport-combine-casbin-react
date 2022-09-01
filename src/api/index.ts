// index.ts
import axios, { AxiosResponse } from 'axios';
import type { AxiosInstance, AxiosRequestConfig } from 'axios';

class Request {
  instance: AxiosInstance;

  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config);

    // 请求拦截器
    this.instance.interceptors.request.use(
      (res: AxiosRequestConfig) => {
        return res;
      },
      (err: Error) => {
        console.error(err);
        return err;
      }
    );

    // 响应拦截器
    this.instance.interceptors.response.use(
      (res: AxiosResponse) => {
        if (!res.data['success']) {
          console.error('axios 响应错误', res.data);
        }
        return res.data;
      },
      (err: Error) => {
        console.error(err);
        return err;
      }
    );
  }
}

export default Request;
export const BaseURL = 'http://localhost:7003';
