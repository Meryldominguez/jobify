import { BrowserRouter } from 'react-router-dom';
import './styling/App.css';
import useAuth from './hooks/useAuth';
import {useGetUserProfile} from "./hooks/useFetch"

import Nav from './Nav';
import Routes from './routes/Routes';
import UserContext from './context/UserContext';

function App() {
  const [user, signup, login, logout] = useAuth()

  let [[profile, setProfile], isLoading, authProfile, updateProfile] = useGetUserProfile(user?user.username:undefined)

  return (
    <div className="App">
      <UserContext.Provider value={{user, signup, login, profile, setProfile, isLoading, authProfile, updateProfile}}>
        {console.log("USER:",user, profile)}
      <BrowserRouter>
        <Nav 
          logout={logout}
        />
        <Routes/>
      </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
