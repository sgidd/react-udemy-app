import React, {Component} from 'react';
import  './Person.css';
import Radium from 'radium';

import Aux from '../../../hoc/Auxillary';
import withClass from '../../../hoc/withClass2';

//109
import PropTypes from 'prop-types';

/* Generally you have to return only one JSX element inside of component,
 that JSX element can contain other jsx elements but you must have only one root jsx element

 so not allwed to return the adjusant root jsx elements like here another DIV after the div with class Person
 no adjusant JSX elemnts are not allowed

 but there are alternate ways:

 1: render the array of elements as in Persons.js
    technically array is one object with multiple elements 
    and indeed react allows to render array of adjusant elements as long as all the items in array have KEY
    implementation is below: 

    return adjusant elements in array with each separating by comma and having unique key

 2: Create a wraping component that does not get render any html code or does show up in in dom / on inspect but to there fulfill reacts requirement of having the wrapping root jsx
    see the solution in new folder 'hoc'
    
    there create a high order component named Aux , which act as root jsx - import here to use and wrap around 

    2a : there is bult in aux compoenent '<React.Fragment>'

    or import  import React, {Component, Fragment} from 'react';

    and simply use <Fragment>
    

 */
class Person extends Component{

    //110 in regular javascript
    //it will work but fst input will get focus always bcoz query selector selects the fst input it finds and its not react approch
    
    componentDidMount(){
       // document.querySelector('input').focus();
       this.inputElement.focus();
    }
    //if we want to focus on last input element  it is optimal way
    //react provides easier way to select the element , concept called Refs switch
    //on any element yu want to select need to add ref keyword and pass a anonymous function
    //here argument you get is the the reference to the element you placed the ref on which yu can use it in body 
    //or other place can store it in global property  and can use anywhere in app
    render(){
        const style= {
            '@media (min-width : 500px )':{
                width : '450px'
            }
        }
    
        console.log("[Person.js] Rendering....")
        //1.
        // return [
            
        //         <h2 key ="ele1" onClick= {this.props.click}>I am {this.props.name} and i am {this.props.age} years old</h2>,
        //         <p key="ele2">{this.props.children}</p>,
        //         <input key="ele3" type="text" onChange={this.props.changed} value ={this.props.name} />
         
        // ];


        //2.
        // return (
        //     <Aux>
        //       <h2 onClick= {this.props.click}>I am {this.props.name} and i am {this.props.age} years old</h2>  
        //       <p>{this.props.children}</p>
        //       <input type="text" onChange={this.props.changed} value ={this.props.name} />
        //     </Aux>
        // );

        //2a.

        //   return (
        //     <React.Fragment>
        //       <h2 onClick= {this.props.click}>I am {this.props.name} and i am {this.props.age} years old</h2>  
        //       <p>{this.props.children}</p>
        //       <input type="text" onChange={this.props.changed} value ={this.props.name} />
        //     </React.Fragment>
        // );


        //video 107 - passing indirect props
        return (
            <Aux>
              <h2 onClick= {this.props.click}>I am {this.props.name} and i am {this.props.age} years old</h2>  
              <p>{this.props.children}</p>
              <input 
              type="text" 
            //   ref ={(inputEl) => {inputEl.focus();}}
            ref= {(inputE) => {this.inputElement = inputE}}
              onChange={this.props.changed} 
              value ={this.props.name} />
            </Aux>
        );


    }
   
};

Person.propTypes = {
    click : PropTypes.func,
    name : PropTypes.string,
    age : PropTypes.number,
    changed : PropTypes.func
};

export default withClass(Radium(Person) , "Person");