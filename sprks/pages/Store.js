import React, { useState } from 'react';

const initalState = {
  name: '',
  id: null,
};

export const Context = React.createContext();

// Store component
const Store = ({ children }) => {
  const [activeUser, setActiveUser] = useState(initalState);

  return (
    <Context.Provider value={[activeUser, setActiveUser]}>
      {children}
    </Context.Provider>
  );
};

export default Store;
