import { createContext, useContext, useState } from 'react';

export const UserContext = createContext();

export function UserProvider({ children }) {

  const [user, setUser] = useState({
    _id: '',
    username:'',
    mail: '',
    points: '',
    token: ''
  });

  function setUserProfile(user) {
    setUser({...user});
    // localStorage.setItem('user', JSON.stringify(user));
  }

  return (
    <UserContext.Provider value={{ user, setUserProfile }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useClicksContext must be used within a ClicksContextProvider');
  }

  return context;
}
