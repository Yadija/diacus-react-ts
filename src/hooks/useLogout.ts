import useAuth from './useAuth';
import useAxiosPrivate from './useAxiosPrivate';

const useLogout = () => {
  const { setAuth } = useAuth();
  const axiosPrivate = useAxiosPrivate();

  const logout = async () => {
    try {
      await axiosPrivate.delete('/auth');
      setAuth(null);
    } catch (error) {
      console.error(error);
    }
  };

  return logout;
};

export default useLogout;
