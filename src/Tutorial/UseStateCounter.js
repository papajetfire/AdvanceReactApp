import React,{ useState } from 'react'

function UseStateCounter() {
    let  c=0
    const[count,setCount]=useState(c)
    const add=()=>setCount((prevCount)=>prevCount+1)
    const minus=()=>setCount((prevCount)=>prevCount-1)
    const reset=()=>setCount(c)

    
    return (
        <>
        <section style={{margin:'5rem 0'}}>
        <h1>{count}</h1><br></br>
        <button className = 'btn' onClick = { add }> + </button>
        <button className = 'btn' onClick = { reset }> RESET </button>
        <button className = 'btn' onClick = { minus }> - </button>

        </section>
            
        </>
    )
}

export default UseStateCounter
