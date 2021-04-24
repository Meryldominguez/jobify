import { useEffect, useState } from "react"
import { useLocation } from "react-router"
import JoblyApi from "../api"
// import Company from "../Company"
// import {v4 as uuid} from "uuid"

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

export {useFetchCompanies,useFetchJobs, useFetchCompany}