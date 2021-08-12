import React from 'react'
import axios from 'axios'

function LearnJSON () {
    const clickHandle= (b)=>{
        const promise=axios.post("http://localhost:4000/users",{
        name:'Loki'},{header:{
            ['content-type']:'application/json'
        }}
    )
    promise.then(response =>{
        console.log(response) // this is used to console log our respose from the server
    })
    promise.error(error =>{
        console.error(error)
    })
    let c=b
    console.log(c)
}    
    const getUser=()=>{
        axios.get("").then((users)=>{/*we are gettting the data  and stroing it in users and then consoling it*/
        console.log(users)})
    }
    
    
    return (
        <>
        <h2> Random Title</h2>
        <button className="btn" onClick={clickHandle}>Post the user</button>
        <button className='btn' onClick={getUser}>Get user</button>
            
        </>
    )
}

export default LearnJSON
