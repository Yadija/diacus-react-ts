import useAuth from './useAuth';
import useAxiosPrivate from './useAxiosPrivate';

const useLogout = () => {
  const { setLogout } = useAuth();
  const axiosPrivate = useAxiosPrivate();

  const logout = async () => {
    try {
      await axiosPrivate.delete('/auth');
      setLogout();
    } catch (error) {
      console.error(error);
    }
  };

  return logout;
};

export default useLogout;
