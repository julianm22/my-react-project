import React, {Component, Fragment} from 'react';
import classes from './Person.css'
import Auxiliary from '../../../hoc/Auxiliary';
// import Radium from 'radium';
// import styled from 'styled-components';

class Person extends Component {
    render() {
        console.log('[Person.js] rendering...');
        return (
            <Auxiliary>
                <p onClick={this.props.click}>
                    I'm {this.props.name} and I am {this.props.age} years old!
                </p>
                <p>{this.props.children}</p>
                <input type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name} 
                />
            </Auxiliary>  
        );
    }
}

export default Person;