import React, { useState } from 'react'

// we want to have two input fields
// we want to have a button
// one of the input field should accept username and email
// we want to accept the data and store it somewhere in a variable
// initial things will be empty


function Forms() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();  // this is used to prevent the default behaviour of the browser
    // console.log(firstName,email);   // it will show in the console after submit by the button
    if (firstName && email) {
      console.log('submit the value');
      const person = { id: new Date().getTime().toString(),firstName,email };
      console.log(person);
      setPeople((people) => {
        return [...people, person];
      });
      setFirstName('');
      setEmail('');

    }
    else {
      console.log('empty value');
    }
  }
  return (
    <>
      <article>
        <form className='form' onSubmit={handleSubmit}>
          {/* here we use onsubmit which works same as onclick in the button  */}
          <div className='form-control'>
            <lable htmlFor="FirstName">Name :</lable>
            <input type="text" id="firstname" name='firstname' value={firstName}
              onChange={(e) => setFirstName(e.target.value)}></input>
          </div>

          <div className='form-control'>
            <lable htmlFor="email">Email :</lable>
            <input type="text" id="email" name='email' value={email}
              onChange={(e) => setEmail(e.target.value)}></input>
          </div>

          <button type="submit">Submit</button>

        </form>
        {people.map((person, index) => {
          const{id,firstName, email} = person;
          return(
          <div className="item" key={id}>
            <h4>{firstName}</h4>
            <p>{email}</p>
          </div>
          );
        })}
      </article>
    </>
  )
}

export default Forms
