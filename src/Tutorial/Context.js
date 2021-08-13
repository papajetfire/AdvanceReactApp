import React,{useState, useContext} from 'react'
import { data } from './data'
//context api is to fix the isssues arising by useing prop drilling
// that is there are a lot of components to pass through another component in order to get the job done

const PersonContext = React.createContext()
function Context() {
    const [people,setPeople]=useState(data)
    const removePerson=(id)=>
    {
        setPeople((peple)=>{
        return people.filter((person)=>person.id!==id)})
    }
    return (
        <>
        <PersonContext.Provider value={{removePerson}}>
        <section>
            <h3> Context API</h3>
            <List people={people}/>
        </section>
        </PersonContext.Provider>
            
        </>
    )
}
const List=({people, removePerson})=>{
    return <>
        {
            people.map((person)=>{
                return<SinglePerson key={person.id} {...person}/>
            })
        }
    </>
}

const SinglePerson = ({id, name}) => {
    const {removePerson}=useContext(PersonContext)
    return <div className='item'>
        <h4>{name}</h4>
        <button className="btn" onClick={()=> removePerson(id)}>remove</button>
    </div>
}
export default Context
