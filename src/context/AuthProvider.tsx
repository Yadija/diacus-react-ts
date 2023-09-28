import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';

interface Auth {
  accessToken?: string;
  refreshToken?: string;
}

type AuthContextType = {
  auth: Auth | null;
  setAuth: Dispatch<SetStateAction<Auth | null>>;
};

const iAuthContextState = {
  auth: { accessToken: '', refreshToken: '' },
  setAuth: () => {},
};

export const AuthContext = createContext<AuthContextType>(iAuthContextState);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [auth, setAuth] = useState<Auth | null>(null);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>{children}</AuthContext.Provider>
  );
};
