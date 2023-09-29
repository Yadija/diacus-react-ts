import axios from '../api/axios';
import useAuth from './useAuth';

const useRefreshToken = () => {
  const { auth, setAuth } = useAuth();

  const refresh = async () => {
    const {
      data: { data },
    } = await axios.put(
      '/auth',
      {},
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${auth?.refreshToken}`,
        },
      },
    );

    setAuth((prev) => {
      return { ...prev, ...data };
    });

    return data;
  };

  return refresh;
};

export default useRefreshToken;
