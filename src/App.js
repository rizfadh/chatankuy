import React from 'react';

// Custom Style
import './style/style.scss';
// Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Landing from './components/Landing';
import UserContext from './context/UserContext';
import ChatMenu from './components/ChatMenu';


export default function App() {
  const [name, setName] = React.useState('');

  const contextValue = React.useMemo(() => {
    return { name, setName }
  }, [name]);

  if (name.length === 0) return (
    <UserContext.Provider value={contextValue}>
      <Landing />
    </UserContext.Provider>
  );

  return (
    <UserContext.Provider value={contextValue}>
      <ChatMenu />
    </UserContext.Provider>
  );
}