import React, { useState, useEffect } from 'react'

function UseEffectBasic() {
    const[value,setValue]=useState(2)
    console.log('render')
    useEffect(()=>{
        console.log('inside useeffect')
        if (value>16){
        document.title=`(${value})`}
    },[value])
    return (
        <>
        <h2> Leaning Use Effect</h2>
        <h1>{value}</h1>
        <button className='btn' onClick={()=>setValue(value*2)}> Click to learn</button>

            
        </>
    )
}

export default UseEffectBasic
