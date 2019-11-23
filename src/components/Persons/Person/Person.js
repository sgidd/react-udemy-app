import React, {Component} from 'react';
import  './Person.css';
import Radium from 'radium';

import Aux from '../../../hoc/Auxillary';
import withClass from '../../../hoc/withClass2';

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
              <input type="text" onChange={this.props.changed} value ={this.props.name} />
            </Aux>
        );


    }
   
};

export default withClass(Radium(Person) , "Person");