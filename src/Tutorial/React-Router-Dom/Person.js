import React,{useState,useEffect} from 'react'
import { useParams,Link } from 'react-router-dom'
import { data } from '../data'

function Person() {
    const [name,setName] = useState("Default State")
    const {id}=useParams()
    useEffect(()=>{
        const newPerson = data.find((person)=> person.id===parseInt(id))
        setName(newPerson.name)
    },[])
    return (
        <>
        <h1>{name}</h1>
        <Link to="/people" className="btn">
            Back to People
        </Link>
            
        </>
    )
}

export default Person
