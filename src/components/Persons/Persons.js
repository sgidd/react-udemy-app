import React, {PureComponent} from 'react';
import Person from './Person/Person'


      
          //Purecomponent that already mplements shouldCompUpdate with complete props check so that checks for any change in any props of this comp
          // shouldComponentUpdate(nextProps, nextState){
          //   console.log("[Persons.js] shouldComponentUpdate(nextProps, nextState)");
          //   if(nextProps.persons !== this.props.persons || nextProps.changed !== this.props.changed ||
          //     nextProps.clicked !== this.props.clicked)
          //   { 
          //     return true ;
          //   }
          //   else { return false;}
          // }



class Persons extends PureComponent {


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
