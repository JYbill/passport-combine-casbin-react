import { AxiosInstance, AxiosResponse } from 'axios';
import Request, { BaseURL } from './index';
import { RequestResponse } from './interface';

/**
 * @file: auth.api.ts
 * @author: xiaoqinvar
 * @desc：授权接口
 * @date: 2022-08-30 16:47:58
 */
type TGithubTokenResult = {
  code: string;
  state: string;
  auth: string;
};
export default class AuthApi {
  #api = new Request({ baseURL: BaseURL }).instance;

  /**
   * 根据GitHub获取token
   * @param params
   * @returns
   */
  async getTokenByGithub(params: Record<string, string>): Promise<Record<string, TGithubTokenResult>> {
    return this.#api.get('/v1/auth/github/cb', {
      params,
    }) as AxiosResponse['data'];
  }
}
