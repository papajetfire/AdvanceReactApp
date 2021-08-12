import React, { useState, useReducer} from 'react'
import {data} from '../data'
import Model from './Model'


function Index() {
    const [name, setName]=useState("");
    const [people, setPeople]=useState([data]);
    const [showmodel,setShowmodel] = useState(false);
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(name){
            setPeople([...people,{id:new Date().getTime().toString(),name:name}]);
            setName("");
            setShowmodel(true);
        }
        else{
            setShowmodel(true);
        }
    }
    
    return (
        <>
         {showmodel && <Model />}
        <form onSubmit={handleSubmit} className='form'>
            <div>
                <input type='text' value={name} onChange={(e)=>setName(e.target.value)} ></input>
            </div>
            <button type='submit'> add user</button>

        </form>
        {people.map((person)=>{
            return ( 
                <> 
                <div key={person.id}>
                    <h4>
                      {person.name}
                    </h4>
                </div>
                </>
            )
        }
        ) 
        }
        
            
        </>
    )
}

export default Index
