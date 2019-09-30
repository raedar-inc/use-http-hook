import { IFetch } from '../interfaces/IFetch';

export default class Fetch<T> implements IFetch<T> {
  public url: string;
  /**
   * @param  {Url} model
   */
  constructor(url: string) {
    this.url = url;
  }
  /**
   * @param  {T} data
   * @param  {object={}} options
   * @returns Promise
   */
  public async get(options: object = {}): Promise<any> {
    const result = options;
    return Promise;
  }

  /**
   * @param  {object={}} options
   * @returns Promise
   */
  public async post(data: any, options: object = {}): Promise<any> {
    const result = options;
    return Promise;
  }

  /**
   * @param  {object={}} options
   * @returns Promise
   */
  public async update(options: object): Promise<any> {
    const result = options;
    return Promise;
  }

  /**
   * @param  {object={}} options
   * @returns Promise
   */
  public async patch(options: object): Promise<any> {
    const result = options;
    return Promise;
  }

   /**
   * @param  {object={}} options
   * @returns Promise
   */
  public async delete(options: object): Promise<any> {
    const result = options;
    return Promise;
  }
}
