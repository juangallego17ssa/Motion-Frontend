import styled from "styled-components";

export const StyledButton = styled.button`
    background-color:  ${props => props.color ? props.color : "beige"};
    border: 1px solid black;    

`
