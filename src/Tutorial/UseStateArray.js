import React from 'react'
import { data } from './data'

function UseStateArray() {
    const[people,setPeople]=React.useState(data)
    let removeItem=(id)=>{
        let newPeople=people.filter((person)=>person.id!==id)
        setPeople(newPeople)
    }
    function reappear(){
        return(
            <>
        {
        people.map((person)=>{
           const{id,name}=person
            return(
                <div key={person.id} className='item'>
                    <h4> {person.name} </h4>
                    <button type='button' onClick={()=>removeItem(person.id)}>Remove</button>
                    <button className='btn' onClick={reappear}>Reappear</button>
                </div>
            )
        })
    }
    <button type='button' onClick={()=>setPeople([])}>Clear the Avengers</button>
    <button className='btn'>Reappear</button>
        </>

        )
    }
    return (
        <>
        {
        people.map((person)=>{
           const{id,name}=person
            return(
                <div key={person.id} className='item'>
                    <h4> {person.name} </h4>
                    <button type='button' onClick={()=>removeItem(person.id)}>Remove</button>
                </div>
            )
        })
    }
    <button type='button' onClick={()=>setPeople([])}>Clear the Avengers</button>
    <button className='btn' onClick={reappear}>Reappear</button>
        </>
    )
}

export default UseStateArray
