import axios from "axios";

export const get = (url: string, options: Object = {}) => {
  return axios.get(url, options);
};
