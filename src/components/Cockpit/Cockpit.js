import React, { useEffect } from 'react';
import './Cockpit.css';
import Radium, {StyleRoot} from 'radium';


/*
useEffect()  is a react hook which runs on every component which runs on every render cycle of the component including the first [basically combination of componentDidMount() and componentDiDUpdate()  -- first and every update ]
its the 2nd most react hook after the useState
it combines the functinality or usecases of all the class based lifcycle hooks in one react hook 
*/

const cockpit = (props) => {

    useEffect( () => {
      console.log('[cockpit.js] useEffect()');
      //HTTP reuqest -- can send here

      setTimeout( () => {
        alert('Saved Data to Cloud');
      },1000);

    } , [props.persons]);  // it will run only once persons prop change - not every time (first time will run by default)
    
    

    // to run the useEffect on change in diff data you can write it more than once or list in above array -  [props.persons, props.showPersons]
    // useEffect( ()={} , [props.xyz])


      //To run it only on first time pass empty array
      useEffect( () => {
        console.log('[cockpit.js] useEffect()');
        //HTTP reuqest -- can send here
  
        setTimeout( () => {
          alert('Runs only on First Render Cycle');
        },1000);
  
      } , []);



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