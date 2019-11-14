import React, {Component} from 'react';
import Person from './Person/Person'

class Persons extends Component {

        // static getDerivedStateFromProps(props,state){
        //   console.log("[Persons.js] getDerivedStateFromProps(props,state)");
        //   return state;
        // }

        // componentWillReceiveProps(props){
        //   console.log("[Persons.js]  componenetWillReceiveProps");
        // }

        shouldComponentUpdate(nextProps, nextState){
          console.log("[Persons.js] shouldComponentUpdate(nextProps, nextState)");
          return true;
        }


        render(){
          console.log("[Persons.js] Rendering...");
          return this.props.persons.map(
          (person, index) => {
            return <Person 
            name={person.name} 
            age={person.age} 
            click={() => this.props.clicked(index)}
            key ={person.id}
            changed = {  (event) => this.props.changed(event, person.id)} />
          }
          );
        } 

        getSnapshotBeforeUpdate(prevProps, prevState){
          console.log("[Persons.js] getSnapshotBeforeUpdate(prevProps, prevState)");
          return {message : 'snapshot'};
        }

        // componentWillUpdate(){
        //   console.log('[Persons.js] componentWillUpdate');
        // }

        /* componentWillReceiveProps and componentWillUpdate are not recomnded to use,
         as they have been renamed or will be removed in future */

        componentDidUpdate(prevProps, prevState, snapshot){
          console.log("[Persions.js] componentDidUpdate()");
          console.log(snapshot);
        }

        componentWillUnmount(){
          console.log('[Persons.js] componentWillUnMount()');
        }
}
export default Persons;
