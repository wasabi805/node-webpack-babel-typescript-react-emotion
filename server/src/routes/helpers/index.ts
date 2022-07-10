import axios, { AxiosPromise } from "axios";
// see https://stackoverflow.com/q/62217642/7857134

interface iFetchApi {
  method: string;
  url: string;
}

export const fetchApi = ({ method, url }: iFetchApi): AxiosPromise => {
  return axios({
    method: method,
    url: url,
  }).then((res) => res.data);
};
