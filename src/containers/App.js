
import React, { Component } from 'react';
import './App.css';
import Radium, {StyleRoot} from 'radium';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';


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
    const newPersons = [...this.state.persons]; 
    newPersons.splice(personIndex,1);
    this.setState({persons:newPersons});
  }

  render() {
  
    let persons = null;
    let cockpit =    <Cockpit 
    persons= {this.state.persons}
    toggle = {this.togglePersonsHandler}
    showPersons = {this.state.showPersons}/>;

    if(this.state.showPersons) {
      persons = <Persons 
                persons= {this.state.persons}
                clicked={ this.deletePersonHandler}
                changed = {this.listNameChangedHandler} 
                />;

      cockpit =  <Cockpit 
        persons= {this.state.persons}
        toggle = {this.togglePersonsHandler}
        showPersons = {this.state.showPersons}/>;  
    }

    return (
      <StyleRoot>
        <div className="App">
        {cockpit}
        {persons}   
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);


