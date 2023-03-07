import { React, createContext, useContext, useEffect, useMemo, useState } from "react";
import axios from "axios";
import { axiosRequest, axiosResponse } from "../api/axiosDefaults";
import { useHistory } from "react-router-dom";
import { removeTokenTimestamp, shouldRefreshToken } from "../utils/utils";

/*
This object is for accessing the user object as a global variable. It is taken from the Moments walkthrough.
https://github.com/Code-Institute-Solutions/moments/blob/master/src/contexts/CurrentUserContext.js
*/
export const CurrentUserContext = createContext();
export const SetCurrentUserContext = createContext();

export const useCurrentUser = () => useContext(CurrentUserContext);
export const useSetCurrentUser = () => useContext(SetCurrentUserContext);

export const CurrentUserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const history = useHistory();

    const handleMount = async () => {
        try {
            const { data } = await axiosResponse.get("dj-rest-auth/user/");
            setCurrentUser(data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        handleMount();
    }, []);

    useMemo(() => {
      axiosRequest.interceptors.request.use(
        async (config) => {

            if(shouldRefreshToken()){

              try {
                await axios.post("dj-rest-auth/token/refresh/");
              } catch (err) {
                setCurrentUser((prevCurrentUser) => {
                  if (prevCurrentUser) {
                    history.push("/signin");
                  }
                  return null;
                });
                removeTokenTimestamp();
                return config;
              }
            }

          return config;
        },
        (err) => {
          return Promise.reject(err);
        }
      );
  
      axiosResponse.interceptors.response.use(
        (response) => response,
        async (err) => {
          if (err.response?.status === 401) {
            try {
              await axios.post("dj-rest-auth/token/refresh/");
            } catch (err) {
              setCurrentUser((prevCurrentUser) => {
                if (prevCurrentUser) {
                  history.push("/signin");
                }
                return null;
              });
            removeTokenTimestamp();
            }
            return axios(err.config);
          }
          return Promise.reject(err);
        }
      );
    }, [history]);

    return (
        <CurrentUserContext.Provider value={currentUser}>
          <SetCurrentUserContext.Provider value={setCurrentUser}>
            {children}
          </SetCurrentUserContext.Provider>
        </CurrentUserContext.Provider>
      );
};