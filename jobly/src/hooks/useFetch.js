import { useEffect, useState } from "react"
import JoblyApi from "../api"

const useFetchCompanies = () => {
    const [query, setQuery] = useState("")
    const [isLoading,setIsLoading] = useState(true)
    const [companies, setCompanies] = useState()

    useEffect(()=>{
        async function load(){
            const resp = await JoblyApi.getCompanies(query)
            setCompanies(resp)
            setIsLoading(false)
        }
        load()
    },[query])

    const search = (data)=>{
        setIsLoading(true)
        setQuery(data)
    }
    return [companies, isLoading, search]
}

const useFetchCompany = (handle) => {
    const [company, setCompanies] = useState()
    useEffect(()=>{
        async function load(){
            const resp = await JoblyApi.getCompany(handle)
            setCompanies(resp)
        }
        load()
    },[handle])
    return [company]
}

const useFetchJobs = () => {
    const [jobs, setJobs] = useState()
    useEffect(()=>{
        JoblyApi.getJobs()
            .then(resp=>setJobs(resp))
    },[])
    return [jobs]
}
const useGetUserProfile = (username) => {
    const [profile, setProfile] = useState()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        setIsLoading(true)
        async function load(){
            const res = await JoblyApi.getProfile(username)
            setProfile(res.user)
            setIsLoading(false)
            }
        if (username) load()
        setIsLoading(false)
    },[username, isLoading])

    const updateProfile = async (data) => {
        const resp = await JoblyApi.patchProfile(username,data)
        setProfile(resp.user)
        return resp
    }
    const authProfile = async (password) => {
        const resp = await JoblyApi.Login({username,password})
        return resp.token? true: false
    }

    return [[profile,setProfile], isLoading, authProfile, updateProfile]
}

export {useFetchCompanies,useFetchJobs, useFetchCompany, useGetUserProfile}