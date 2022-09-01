/**
 * @file: interface.ts
 * @author: xiaoqinvar
 * @desc：axios interface
 * @date: 2022-09-01 11:01:48
 */

export interface RequestResponse<T> {
  success: boolean;
  data?: T;
  message: string;
}
