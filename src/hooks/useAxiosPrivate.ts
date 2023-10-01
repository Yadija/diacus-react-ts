import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { axiosPrivate } from '../api/axios';
import useAuth from './useAuth';
import useRefreshToken from './useRefreshToken';

const useAxiosPrivate = () => {
  const navigate = useNavigate();
  const refresh = useRefreshToken();
  const { auth, setLogout } = useAuth();

  useEffect(() => {
    const requestIntercept = axiosPrivate.interceptors.request.use(
      (config) => {
        if (!config.headers['Authorization']) {
          config.headers['Authorization'] = `Bearer ${auth?.accessToken}`;
        }

        return config;
      },
      (error) => Promise.reject(error),
    );

    const responseIntercept = axiosPrivate.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config;
        if (error?.response?.status === 401 && !prevRequest?.sent) {
          prevRequest.sent = true;

          try {
            const { accessToken } = await refresh();
            prevRequest.headers['Authorization'] = `Bearer ${accessToken}`;
            return axiosPrivate(prevRequest);
          } catch (error) {
            setLogout();
            navigate('/login');
          }
        }

        return Promise.reject(error);
      },
    );

    return () => {
      axiosPrivate.interceptors.request.eject(requestIntercept);
      axiosPrivate.interceptors.response.eject(responseIntercept);
    };
  }, [auth, refresh]);

  return axiosPrivate;
};

export default useAxiosPrivate;
