/**
 * @funcion useHttpHook
 */

import { useEffect, useState } from 'react'

const get: any = (url: string) => {
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Could not fetch. something went wrong');
      }
      return response.json();
    })
    .then(data => {
      return data;
    })
    .catch(err => {
      return { response:false, err };
    })
};

const post: any = (url: string) => {
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Could not fetch. something went wrong');
      }
      return response.json();
    })
    .then(data => {
      return data;
    })
    .catch(err => {
      return err;
    })
};

enum Methods {
  GET = "GET",
  POST = "POST",
  DELETE = "DELETE",
  UPDATE = "UPDATE",
};

const useHttp = async (method: Methods = Methods.GET, url: string, dependencies?: any[]): Promise<[boolean, any]> => {
  const [isFetching, setIsFetching] = useState(false);
  const [fetchedData, setData] = useState(null);

  useEffect(() => {
    setIsFetching(true);
    if (method === 'GET') {
      // setIsFetching(true);
      let data: any = get(url);
      setData(data);
      setIsFetching(false);
      // if (data && data.response) {
      //   setIsFetching(false);
      //   setData(data);
      // } else if (data && !data.response) {
      //   setIsFetching(false);
      //   throw new Error('Could not fetch. something went wrong');
      // }
    }
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Could not fetch. something went wrong');
        }
        return response.json();
      })
      .then(data => {
        setIsFetching(false);
        setData(data);
      })
      .catch(err => {
        setIsFetching(false);
        return err.json();
      });
  }, dependencies);

  return [isFetching, fetchedData];
};

export default useHttp;
