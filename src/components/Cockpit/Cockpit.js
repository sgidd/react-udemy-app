import React from 'react';
import './Cockpit.css';
import Radium, {StyleRoot} from 'radium';

const cockpit = (props) => {

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

      if(props.showPersons){
        style.backgroundColor = 'red';
        style[":hover"] = {
          backgroundColor : 'salmon',
          color: 'black'
        }
      }
   

    const assignedClasses =[];

    if(props.persons.length <=2){
      assignedClasses.push('red');//classes= ['red']
    }

    if(props.persons.length <=1){
      assignedClasses.push('bold'); //classes= ['red','bold']
    }

    //console.log("[Cockpit.js] Rendering...");
    return (
        <StyleRoot>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is Really working!</p>
            <button 
            style={style}
            onClick={props.toggle} >Toggle Persons</button>
        </StyleRoot>
    );
};

export default Radium(cockpit);