import axios from '../api/axios';
import useAuth from './useAuth';

const useRefreshToken = () => {
  const { auth, setLogin } = useAuth();

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

    setLogin(data);
    return data;
  };

  return refresh;
};

export default useRefreshToken;
