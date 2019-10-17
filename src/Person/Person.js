import React from 'react';
import  './Person.css'

const person = (props) =>{
    return (
        <div className="Person">
            <h2  onClick= {props.click}>I am {props.name} and i am {props.age} years old</h2>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value ={props.name} />
        </div>
    );
};

export default person;