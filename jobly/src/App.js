import { BrowserRouter } from 'react-router-dom';
import './styling/App.css';
import useAuth from './hooks/useAuth';
import {useGetUserProfile} from "./hooks/useFetch"

import Nav from './Nav';
import Routes from './routes/Routes';
import UserContext from './context/UserContext';
import { useState } from 'react';
import AlertContext from './context/AlertContext';

function App() {
  const [user, signup, login, logout] = useAuth()
  let [[profile, setProfile], isLoading, authProfile, updateProfile, apply] = useGetUserProfile(user?user.username:undefined)
  const [alerts, setAlerts] = useState([])

  return !isLoading &&(
    <div className="App">
      <UserContext.Provider 
        value={{user, signup, login, profile, setProfile, isLoading, authProfile, updateProfile, apply}}>
        {console.log("USER:",Boolean(user),"Profile:",profile, "Loading:",isLoading)}
        <AlertContext.Provider value={{alerts,setAlerts}}>
          <BrowserRouter>
            <>
            <Nav logout={logout}/>
            <Routes user={user} />
            </>
          </BrowserRouter>
        </AlertContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
