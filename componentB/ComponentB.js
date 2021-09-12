import React from 'react';
import { ComponentBContainer } from './ComponentBStyle';

import { useSelector } from 'react-redux';



const ComponentB = () => {
    const counter = useSelector(state => state.counter);
    return (
        <ComponentBContainer>
            <h2>ComponentB</h2>
            <p>COUNTER:{counter}</p>
        </ComponentBContainer>
    )
}

export default ComponentB;
