
import React, { Component } from 'react';
import './App.css';
import Radium, {StyleRoot} from 'radium';
import Persons from '../components/Persons/Persons';


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
    const style ={
      backgroundColor : 'green',
      color: 'white',
      border:'1px solid tomato',
      padding: '8px',
      cursor:'pointer',
      ':hover': {
        backgroundColor :'lightgreen',
        color:'black'
      }
    }

    let persons = null;

    if(this.state.showPersons) {
      persons = (
      <div>
        <Persons 
        persons= {this.state.persons}
        clicked={ this.deletePersonHandler}
        changed = {this.listNameChangedHandler} 
        />
      </div>
      );

      style.backgroundColor = 'red';
      style[":hover"] = {
        backgroundColor : 'salmon',
        color: 'black'
      }
    }

    let classes =[];

    if(this.state.persons.length <=2){
      classes.push('red');//classes= ['red']
    }

    if(this.state.persons.length <=1){
      classes.push('bold'); //classes= ['red','bold']
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1>Hi, I am a react app</h1>
          <p className={classes.join(' ')}>This is Really working!</p>
          <button 
          style={style}
          onClick={this.togglePersonsHandler} >Toggle Persons</button>

        {persons}   
        </div>
      </StyleRoot>
  
    );


  }
}

export default Radium(App);


