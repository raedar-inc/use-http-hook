export interface IFetch<T> {
  get: (options?: object) => Promise<T>;
  post: (data: any, options?: object) => Promise<T>;
  update: (options: object) => Promise<any>;
  patch: (data: object, options: object) => Promise<any>;
  delete: (data: object, options: object) => Promise<any>;
}
