import React, {Component} from 'react';
import  './Person.css';
import Radium from 'radium';

class Person extends Component{
    render(){
        const style= {
            '@media (min-width : 500px )':{
                width : '450px'
            }
        }
    
        console.log("[Person.js] Rendering....")
        return (
            <div className="Person" style={style}>
                <h2  onClick= {this.props.click}>I am {this.props.name} and i am {this.props.age} years old</h2>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value ={this.props.name} />
            </div>
        );
    }
   
};

export default Radium(Person);