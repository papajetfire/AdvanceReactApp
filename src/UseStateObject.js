import React,{useState} from 'react'

function UseStateObject() {
    const msg="I don't have a brain"
    const[person,setPerson]=useState({
        name:'Jelly',
        age:'22',
        message:msg})
    const smsg="Brain"
    const changeMessage= (msg) =>{
        if (msg===smsg){
            setPerson({...person,message:smsg})
        }
        else{
            setPerson({...person,message:msg})
        }
    
    }
    return (
        <div>
            <>
            <h3>{person.name}</h3>
            <h3>{person.age}</h3>
            <h3>{person.message}</h3>
            <button className='btn' onClick={changeMessage(person.message)}> Change the message</button>
            </>
        
        </div>
    )
}

export default UseStateObject
