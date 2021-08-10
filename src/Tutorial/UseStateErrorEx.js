import React,{useState} from 'react'

let title="random text";
function ClickHandler() {
    title="Not so random";
    console.log(title)
}
function UseStateErrorEx() {
    return (
        <div>
            <h1>{title}</h1>
            <button type ='button' onClick={ClickHandler}> Click </button>
            
            
        </div>
    )
}

export default UseStateErrorEx
