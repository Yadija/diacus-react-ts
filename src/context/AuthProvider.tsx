import { createContext, ReactNode, useState } from 'react';

interface Auth {
  accessToken?: string;
  refreshToken?: string;
}

type AuthContextType = {
  auth: Auth | null;
  setLogin: (auth: Auth) => void;
  setLogout: () => void;
};

const checkLocalStorage = () => {
  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');

  if (accessToken && refreshToken) {
    return {
      accessToken,
      refreshToken,
    };
  }

  return null;
};

const iAuthContextState = {
  auth: checkLocalStorage(),
  setLogin: () => {},
  setLogout: () => {},
};

export const AuthContext = createContext<AuthContextType>(iAuthContextState);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [auth, setAuth] = useState<Auth | null>(iAuthContextState.auth);

  const setLogin = (auth: Auth) => {
    setAuth(auth);
    localStorage.setItem('accessToken', auth.accessToken || '');
    localStorage.setItem('refreshToken', auth.refreshToken || '');
  };

  const setLogout = () => {
    setAuth(null);
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  };

  return (
    <AuthContext.Provider value={{ auth, setLogin, setLogout }}>
      {children}
    </AuthContext.Provider>
  );
};
