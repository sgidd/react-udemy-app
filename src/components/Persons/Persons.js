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

      


        /* 
          shouldComponentUpdate(nextProps, nextState){
          console.log("[Persons.js] shouldComponentUpdate(nextProps, nextState)");
          return true;
          }
        
        here when we toggle person and remove the cockpit still it will run the all below lfecycle hooks:
              [Persons.js] shouldComponentUpdate(nextProps, nextState)
              Persons.js:23 [Persons.js] Rendering...
              3Person.js:13 [Person.js] Rendering....
              Persons.js:37 [Persons.js] getSnapshotBeforeUpdate(prevProps, prevState)
              App.js:45 [App.js] getSnapshotBeforeUpdate
              Cockpit.js:42 [Cockpit.js] cleanup in useEffect
              Persons.js:49 [Persions.js] componentDidUpdate()

              but no persons comp has been changed , still when there is change in app it will run the all child update lifecycle hooks after render
              as per functionality, we can avoid this re rendering by updating shouldComponentUpdate() : see below
        */

       shouldComponentUpdate(nextProps, nextState){
        console.log("[Persons.js] shouldComponentUpdate(nextProps, nextState)");
        if(nextProps !== this.props){ return true ;}
        else { return false;}
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
