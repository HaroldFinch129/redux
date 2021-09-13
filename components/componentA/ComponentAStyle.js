import styled from "styled-components";

export const ComponentAContainer = styled.div`
background-color: #A5D6A7;
min-width: 300px;
display: flex;
flex-direction: column;
align-items: stretch;
padding: 50px 20px;
justify-content: space-between;
grid-gap: 100px;
`;

export const ComponentHeader = styled.h2`
font-size: 4em;
color: #1b5e20  ;
text-align: center;
text-transform: uppercase;

`;

export const Display = styled.p`
color: black;
font-size: 2em;
text-align: center;
font-weight: bold;

`;

export const ButtonContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: stretch;
grid-gap: 10px;

`;

export const Button = styled.button`
background-color: ${props => props.color?props.color:"#00e676"};
display: block;
padding: 15px;
border-radius: 5px;
border:none;
color: white;
font-weight: bold;
opacity: 0.8;

&:hover{
    opacity: 1;

}
&:active{
    transform: scale(1.025);
}
`;