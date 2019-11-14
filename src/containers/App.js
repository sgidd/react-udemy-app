
import React, { Component } from 'react';
import './App.css';
import Radium, {StyleRoot} from 'radium';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';


class App extends Component {
  constructor(props){
    super(props);
    console.log("[App.js] Constructor");
  }

  state = {
    persons : [
      {id: 1, name: "Sunil" , age: 26},
      {id: 2, name: "Manoj" , age: 27},
      {id: 3, name: "pj" , age: 28}
    ],
    otherStateProp: "other state property",
    showPersons: false,
    showCockpit: true
  }

  static getDerivedStateFromProps(props,state){
    console.log("[App.js] getDerivedStateFromProps(props,state)", props);
    return state;
  }

  // componentWillMount(){
  //   console.log("[App.js] componentWillMount()");
  // }

  componentDidMount(){
    console.log("[App.js] componentDidMount()");
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('[App.js] getSnapshotBeforeUpdate');
    return {snapshot : 'snapshot before update'};
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    console.log('[App.js] componentDidUpdate');
    console.log(snapshot);
  }

/*  componentDidMount(){}, shouldComponentUpdate(nextProps, nextState){}, componentDidUpdate(prevProps, prevState, snapshot){}
  are the 3 important update lifecycle's */

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

    console.log("[App.js] render()");

    let persons = null;
    let cockpit =    <Cockpit 
    persons= {this.state.persons}
    toggle = {this.togglePersonsHandler}
    showPersons = {this.state.showPersons}/>;

    cockpit =   <Cockpit 
      persons= {this.state.persons}
      toggle = {this.togglePersonsHandler}
      showPersons = {this.state.showPersons}
      title = {this.props.appTitle}/>;

    if(this.state.showCockpit){
      cockpit =   <Cockpit 
      persons= {this.state.persons}
      toggle = {this.togglePersonsHandler}
      showPersons = {this.state.showPersons}
      title = {this.props.appTitle}/>;
    }else{
      cockpit = null;
    }

    if(this.state.showPersons) {
      persons = <Persons 
                persons= {this.state.persons}
                clicked={ this.deletePersonHandler}
                changed = {this.listNameChangedHandler} 
                />;
    }

    return (
      <StyleRoot>
        <div className="App">
        <button onClick = {() => this.setState({showCockpit : false})}>Remove Cockpit</button>
        {cockpit}
        {persons}   
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);


