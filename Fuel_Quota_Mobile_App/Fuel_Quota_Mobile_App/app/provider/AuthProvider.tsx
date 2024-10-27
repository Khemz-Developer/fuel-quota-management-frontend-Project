// AuthProvider.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthContextType {
  token: string | null;
  userName: string | null;
  signIn: (jwtToken: string, user: string) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);
  const [userName, setUserName] = useState<string | null>(null);

  const signIn = async (jwtToken: string, user: string) => {
    setToken(jwtToken);
    setUserName(user);
    await AsyncStorage.setItem('jwtToken', jwtToken);
    await AsyncStorage.setItem('userName', user);
  };

  const signOut = async () => {
    setToken(null);
    setUserName(null);
    await AsyncStorage.removeItem('jwtToken');
    await AsyncStorage.removeItem('userName');
  };

  return (
    <AuthContext.Provider value={{ token, userName, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
