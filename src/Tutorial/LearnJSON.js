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
    
    return (
        <>
        <h2> Random Title</h2>
        <button className="btn" onClick={clickHandle}>Post the user</button>
        <button >Get user</button>
            
        </>
    )
}

export default LearnJSON
