import React, { useState } from 'react'
import '../../App.css'
import styled, { css } from 'styled-components'


const Input = (props, {className}) => {
    

    return (
        
        <div>
            <input className={className} type="text" onChange={props.textSetter} placeholder={props.placeholder} />
        </div>
    )
}


const StyledInput = styled(Input)`
 font-family: Arial;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 22px;
border-radius: 15px;
padding: 5px;
border: none;
color: #0569FF;
width: 300px;

 ${props => props.long && css`
 width: 75vh;
 `}
`;




export default StyledInput
