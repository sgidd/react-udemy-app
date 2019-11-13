// const persons = (props) => {
//     return();
// } 

//as we only returning someting without any additional logic we can shorten as below

import React from 'react';
import Person from './Person/Person'

const persons = (props) => {
        console.log("[Persons.js] Rendering...");
        return props.persons.map(
        (person, index) => {
          return <Person 
          name={person.name} 
          age={person.age} 
          click={() => props.clicked(index)}
          key ={person.id}
          changed = {  (event) => props.changed(event, person.id)} />
        }
      );

      }
export default persons;
