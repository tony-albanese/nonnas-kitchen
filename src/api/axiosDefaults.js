import axios from "axios";
/*
This code sets the default properties for the axios object which makes requests.
This code is based on that from the Moments walkthrough from Code Institute:
https://github.com/Code-Institute-Solutions/moments/blob/master/src/api/axiosDefaults.js
*/
axios.defaults.baseURL = "https://nonnas-kitchen-api.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosRequest = axios.create();
export const axiosResponse = axios.create();
