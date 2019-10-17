
import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'; // Anything with Caps Start as export is Default


class App extends Component {
  state = {
    persons : [
      {id: 1, name: "Sunil" , age: 26},
      {id: 2, name: "Manoj" , age: 27},
      {id: 3, name: "pj" , age: 28}
    ],
    otherStateProp: "other state property",
    showPersons: false
  }

  // siwtchNameHandler = (newName) =>{
  //   //console.log('switch was clicked !');
  //   //Dont Do this :  this.state.persons[0].name ='Sunil Gidd';
  //   this.setState({
  //     persons : [
  //       {name: newName , age: 27},
  //       {name: "Manoj Dhamone" , age: 28},
  //       {name: "pj" , age: 29}
  //     ]
  //   });

  // };

  nameChangedHandler = (event) => {
    this.setState({
      persons : [
        { name: "Sunil" , age: 26},
        { name: event.target.value , age: 27},
        { name: "pj" , age: 28}
      ]
    });

  }

  listNameChangedHandler = (event , id) =>{
    const findPersonIndex = this.state.persons.findIndex( p => {return p.id === id});
    const findPerson = { ...this.state.persons[findPersonIndex]};
    findPerson.name = event.target.value;

    const newPersons = [...this.state.persons];
    newPersons[findPersonIndex] = findPerson;
    this.setState({persons:newPersons});

  }


  togglePersonsHandler = () => {
    this.setState({showPersons : !this.state.showPersons});
  }

  deletePersonHandler = (personIndex) => {
    // this.setState({persons: this.state.persons.splice(personIndex ,1)}); can not mdify the state directly so take
    //in reference property and replace in setState

    //const newPersons = this.state.persons;
    //objects and arrays in javascript are reference types so we are pointing to the original persons array
    //newPersons.splice(personIndex,1);// so here already mutating the original data which is not a correct way 
    // so either copy array using SLICE (not splice) or create new array using spread operator as below

    //const newPersons = this.state.persons.slice(); // plice with nothing copies the full array and returns new one
      //or
    const newPersons = [...this.state.persons]; //
    newPersons.splice(personIndex,1);
    this.setState({persons:newPersons});
  }

  render() {
    const style ={
      backgroundColor : 'lightgrey',
      color: '#10069f',
      border:'1px solid tomato',
      padding: '8px',
      cursor:'pointer'
    }

    let persons = null;

    if(this.state.showPersons) {
      persons = (
      // <div>
      // <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
      // <Person 
      // name={this.state.persons[1].name} 
      // age={this.state.persons[1].age}
      // click={ () => this.siwtchNameHandler("Sunil")}
      // changed= {this.nameChangedHandler}>My Hobbie is Playing Football</Person>
      // <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      // </div>
      <div>
        {
          this.state.persons.map(
            (person, index) => {
              return <Person 
              name={person.name} 
              age={person.age} 
              click={ () => this.deletePersonHandler(index)}
              key ={person.id}
              changed = { (event) => this.listNameChangedHandler(event, person.id)} />
            }
          )
        }
      </div>
      );
    }

    return (
      <div className="App">
       <h1>Hi, I am a react app</h1>
       <p>This is Really working!</p>

       {/* <button 
       style={style}
       onClick={this.siwtchNameHandler.bind(this,"Suni G")} >Switch Name</button> */}

      <button 
       style={style}
       onClick={this.togglePersonsHandler} >Toggle Persons</button>

       {/* {
         this.state.showPersons ? 
         <div>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
          <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={ () => this.siwtchNameHandler("Sunil")}
          changed= {this.nameChangedHandler}>My Hobbie is Playing Football</Person>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
         </div> : null
       } */}

       {persons}   
      </div>
    );

    //return React.createElement('div', null, 'h1', 'some text here..');
    // return React.createElement('div', null, React.createElement('h1', null, 'doe\'s this work now?'));
    //return React.createElement('div', {className : 'App'}, React.createElement('h1', null, 'doe\'s this work now?'));
  }
}

export default App;




// import React, { useState } from 'react';
// import './App.css';
// import Person from './Person/Person'; // Anything with Caps Start as export is Default

// const app = props => {

//   //useState always returns array of 2 elements : 1 is current state 2nd is function allows to update state
//     const [personsState , setPersonsState] = useState({
//         persons : [
//           {name: "Sunil" , age: 26},
//           {name: "Manoj" , age: 27},
//           {name: "pj" , age: 28}
//         ],
         
//       });

//     const [otherState , setOtherState] = useState("other state property")

//     console.log(personsState , otherState);

//     const  siwtchNameHandler = () =>{
//     //console.log('switch was clicked !');
//     //Dont Do this :  this.state.persons[0].name ='Sunil Gidd';
//     setPersonsState({
//       persons : [
//         {name: "Sunil Gidd" , age: 27},
//         {name: "Manoj Dhamone" , age: 28},
//         {name: "pj" , age: 29}
//       ]
//     });

//   };

//     return (
//       <div className="App">
//        <h1>Hi, I am a react app</h1>
//        <p>This is Really working!</p>
//        <button onClick={siwtchNameHandler} >Switch Name</button>
//        <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
//        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbie is Playing Football</Person>
//        <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
//       </div>
//     );


// }

// export default app;