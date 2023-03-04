import { axiosRequest } from "../api/axiosDefaults";
import jwtDecode from "jwt-decode";

/*
These utility methods were taken from the Momemnts walkthrough.
https://github.com/Code-Institute-Solutions/moments/blob/master/src/utils/utils.js
*/
export const fetchMoreData = async (resource, setResource) => {
  try {
    const { data } = await axiosRequest.get(resource.next);
    setResource((prevResource) => ({
      ...prevResource,
      next: data.next,
      results: data.results.reduce((acc, cur) => {
        return acc.some((accResult) => accResult.id === cur.id)
          ? acc
          : [...acc, cur];
      }, prevResource.results),
    }));
  } catch (err) {}
};


export const setTokenTimestamp = (data) => {
  const refreshTokenTimestamp = jwtDecode(data?.refresh_token).exp;
  localStorage.setItem("refreshTokenTimestamp", refreshTokenTimestamp);
};

export const shouldRefreshToken = () => {
  return !!localStorage.getItem("refreshTokenTimestamp");
};

export const removeTokenTimestamp = () => {
  localStorage.removeItem("refreshTokenTimestamp");
};