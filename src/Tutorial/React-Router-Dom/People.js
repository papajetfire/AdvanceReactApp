import React, {useState} from 'react'
import {data} from '../data'
import { Link } from 'react-router-dom'

function People() {
    const [people,setPeople]=useState(data)
    return (
        <div>
            <h1> People Page</h1>
            {people.map((person)=>{
                return (
                    <div id={person.key} className='item'>
                    <h4>{person.name}</h4>
                    <Link to={`/person/${person.id}`}>
                        Learn more
                    </Link>
                    
                    </div>
            
            )}
            
            
            )}
            
        </div>
    )
}

export default People
