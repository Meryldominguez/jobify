import { useEffect, useState } from "react"
import JoblyApi from "../api"
import Company from "../Company"
import {v4 as uuid} from "uuid"

const useFetchCompanies = (query="") => {
    const [companies, setCompanies] = useState()
    useEffect(()=>{
        async function load(){
            const resp = await JoblyApi.getCompanies()
            console.log(resp[0])
            setCompanies(resp.map((props)=><Company key={uuid()} {...props}/>))
        }
        load()
    },[query])
    return [companies]
}

const useFetchJobs = () => {
   
    const [jobs, setJobs] = useState()

    useEffect(()=>{
        JoblyApi.getJobs()
            .then(resp=>setJobs(resp))
    
    },[jobs])

    return [jobs]
}

export {useFetchCompanies,useFetchJobs}