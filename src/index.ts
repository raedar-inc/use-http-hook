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

enum Methods {
  GET = "GET",
  POST = "POST",
  DELETE = "DELETE",
  UPDATE = "UPDATE",
};

const useHttp = async (url: string, method?: Methods, dependencies?: Array<any>) => {
  const [isFetching, setIsFetching] = useState(false);
  const [fetchedData, setData] = useState(null);

  useEffect(() => {
    if (!method || method === 'GET') {
      setIsFetching(true);
      let data: any = get(url);
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
        console.log(err);
        setIsFetching(false);
      });
  }, dependencies);

  setIsFetching(true);

  return [isFetching, fetchedData];
};

export default useHttp;
