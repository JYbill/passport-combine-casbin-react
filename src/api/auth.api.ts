import { AxiosInstance } from 'axios';
import Request, { BaseURL } from './index';

/**
 * @file: auth.api.ts
 * @author: xiaoqinvar
 * @desc：授权接口
 * @date: 2022-08-30 16:47:58
 */
export default class AuthApi {
  #api: AxiosInstance = new Request({ baseURL: BaseURL }).instance;
}
