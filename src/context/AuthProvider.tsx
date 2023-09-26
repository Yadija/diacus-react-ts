import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';

type AuthContextType = {
  auth: object | null;
  setAuth: Dispatch<SetStateAction<object | null>>;
};

const iAuthContextState = {
  auth: {},
  setAuth: () => {},
};

export const AuthContext = createContext<AuthContextType>(iAuthContextState);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [auth, setAuth] = useState<object | null>(null);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>{children}</AuthContext.Provider>
  );
};
