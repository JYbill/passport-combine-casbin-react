/**
 * @file: bom.util.ts
 * @author: xiaoqinvar
 * @desc：Bom util操作
 * @date: 2022-09-03 12:09:43
 */
export default class BomUtil {
  /**
   * 移除指定的localStorage中的key
   * ```ts
   * clearLocalStorage('token');
   * ```
   * @param key storage的key
   */
  static clearLocalStorage(key: string): void {
    localStorage.removeItem(key);
  }
}
