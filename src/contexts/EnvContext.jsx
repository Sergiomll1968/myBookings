import { createContext, useState } from 'react';

const environmentVariables = {
  HOST : 'https://apihairs-7342.onrender.com/'
};

export const EnvContext = createContext();

export function EnvProvider({ children }) {

  const [env, setEnv] = useState(environmentVariables);
 
  return (
    <EnvContext.Provider value={{ env, setEnv }}>
      {children}
    </EnvContext.Provider>
  );
}

// export function useUserContext() {
//   const context = useContext(UserContext);
//   if (!context) {
//     throw new Error('useClicksContext must be used within a ClicksContextProvider');
//   }

//   return context;
// }
