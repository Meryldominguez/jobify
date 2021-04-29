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

  return !isLoading &&(
    <div className="App">
      <UserContext.Provider value={{user, signup, login, profile, setProfile, isLoading, authProfile, updateProfile}}>
        {console.log("USER:",Boolean(user),"Profile:",profile, isLoading)}
      <BrowserRouter>
        {!isLoading &&
        <>
        <Nav logout={logout}/>
        <Routes profile={profile}/>
        </>}
      </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
