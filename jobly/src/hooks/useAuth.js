import { useEffect, useState } from "react"
import JoblyApi from "../api"

const useAuth = () => {
    const [user, setUser] = useState({})
    useEffect(()=>{
        if (window.localStorage.user) setUser(window.localStorage.user)
    },[])

    const signup = async (formData)=>{
        const resp = await JoblyApi.Login(formData)
        
        if (!resp.error){
            console.log(resp)
        }
        return Error
    }
    
    const login = async ({username,password})=>{
        const resp = await JoblyApi.Login({username, password})
        
        if (!resp.error){
            setUser({...resp, username})
            console.log(resp)
        }
        return Error
    }
    const logout = ()=>{
        setUser({})
    }

    return [user, signup, login, logout]
}
export default useAuth