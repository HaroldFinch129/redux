import React from 'react';
import {ComponentAContainer,ComponentHeader, ButtonContainer, Button, Display}  from './ComponentAStyle';
import {Reducer} from '../../redux/Store';
import { useSelector, useDispatch } from 'react-redux';
const ComponentA = () => {
    // const counter = initialState.counter
    const counter = useSelector((state)=>state.counter) 
    const dispatch = useDispatch()
    return (
        <ComponentAContainer>
            <ComponentHeader>ComponentA</ComponentHeader>
            <Display>COUNTER : {counter}</Display>
            <ButtonContainer>
                <Button color = "#00c853" onClick={()=> {dispatch({type:"INCREASE"})}}>INCREASE</Button>
                <Button color = "#2979ff" onClick={()=> {dispatch({type:"DECREASE"})}}>DECREASE</Button>
                <Button color = "#ff5722" onClick={()=> {dispatch({type:"RESET"})}}>RESET</Button>
            </ButtonContainer>
            
        </ComponentAContainer>
    )
}

export default ComponentA;

