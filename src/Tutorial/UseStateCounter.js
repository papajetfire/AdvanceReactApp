import React,{ useState } from 'react'

function UseStateCounter() {
    let  c=0
    const[count,setCount]=useState(c)
    const add=()=>setCount((prevCount)=>prevCount+1)
    const minus=()=>setCount((prevCount)=>prevCount-1)
    const reset=()=>setCount(c)
    const addComplex=()=>setTimeout(()=>setCount((prevCount)=>prevCount+1),1000)
   
    
    return (
        <>
        <section style={{margin:'5rem 0'}}>
        <h1>{count}</h1><br></br>
        <button className = 'btn' onClick = { add }> + </button>
        <button className = 'btn' onClick = { reset }> RESET </button>
        <button className = 'btn' onClick = { minus }> - </button>

        </section>
        <section style={{margin:'5rem 0'}}>
        <h1>
            complex
        </h1>
        <button className = 'btn'onClick = {addComplex}> + Complex </button>

        </section>
            
        </>
    )
}

export default UseStateCounter
