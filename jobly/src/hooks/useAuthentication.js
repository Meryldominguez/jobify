import { useEffect, useState } from "react"
import JoblyApi from "../api"

const useAuthentication = () => {
    const [User, setUser] = useState({})
    useEffect(()=>{
        if (window.localStorage.user) setUser(window.localStorage.user)
    },[])
    const Login = async (username,password)=>{
        const resp = await JoblyApi.Login(username, password)
        if (!resp.error){
            setUser(resp.user)
        }
        return Error
    }
    const Logout = ()=>{
        setUser({})
    }

    return [User,Login, Logout]
}
export default useAuthentication