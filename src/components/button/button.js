import React, { useState } from 'react'
import '../../App.css'
import styled, { css } from 'styled-components'

const Button =  (props, {className}) => {
 
return (
        <div>
            <button className={className} onClick={props.submit}>{props.buttonName}</button>
        </div>
    )
}

const StyledButton = styled(Button)`
  font-family: Arial;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  border-radius: 15px;
  padding: 10px;
  color: #0569FF;
  border: none;
  

  ${props => props.orange && css`
    background: orange;
    color: black;
  `}
`;    


export default StyledButton