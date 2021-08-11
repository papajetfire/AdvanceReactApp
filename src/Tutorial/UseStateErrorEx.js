import React,{useState} from 'react'
let title="Some random text"; 
let newTitle="Not so random"
function UseStateErrorEx(){
const[text,setText]=useState(()=> title);
function ClickHandler() {
    setText(prevText => {
        if (prevText===title){
            prevText=newTitle
        }
        else{
            prevText=title
        }
        return prevText
})}
    return (
        <div>
            <h1>{text}</h1>
            <button type ='button' onClick={ClickHandler}> Click </button>
            
            
        </div>
    )
}

export default UseStateErrorEx
