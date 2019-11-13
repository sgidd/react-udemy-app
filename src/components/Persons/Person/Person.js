import React from 'react';
import  './Person.css';
import Radium from 'radium';

const person = (props) =>{

    const style= {
        '@media (min-width : 500px )':{
            width : '450px'
        }
    }

    console.log("[Person.js] Rendering...")
    return (
        <div className="Person" style={style}>
            <h2  onClick= {props.click}>I am {props.name} and i am {props.age} years old</h2>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value ={props.name} />
        </div>
    );
};

export default Radium(person);