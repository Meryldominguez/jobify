import { BrowserRouter } from 'react-router-dom';
import './App.css';
import useAuth from './hooks/useAuth';

import Nav from './Nav';
import Routes from './Routes';

function App() {
  const [user, signup, login, logout] = useAuth()
  return (
    <div className="App">
      <BrowserRouter>
        <Nav logout={logout}/>
        <Routes 
          user={user}
          login={login}
          signup={signup}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
