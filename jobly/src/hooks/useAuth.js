import { useEffect, useState } from "react"
import JoblyApi from "../api"

const useAuth = () => {
    const [user, setUser] = useState()
    
    useEffect(()=>{
        if (window.localStorage.username) {
            setUser(window.localStorage)
            JoblyApi.token = window.localStorage.token
            return
        }
        setUser()
    },[user])

    const signup = async (formData)=>{
        const resp = await JoblyApi.Signup(formData)
        if (!resp.error){
            window.localStorage.setItem("username",resp.username)
            window.localStorage.setItem("token",resp.token)
        }
        return resp.error
    }
    
    const login = async ({username,password})=>{
        const resp = await JoblyApi.Login({username, password})
        console.log(resp)
        if (!resp.error){
            JoblyApi.token = resp.token
            window.localStorage.setItem("username",resp.username)
            window.localStorage.setItem("token",resp.token)
            setUser({...resp, username})
            return  
        }
        return resp.error
    }
    const logout = ()=>{
        window.localStorage.clear()
        setUser()
        window.open('/', '_self')
    }

    return [user, signup, login, logout]
}
export default useAuth