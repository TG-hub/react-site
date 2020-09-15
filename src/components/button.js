import React, { useState } from 'react'
import '../App.css'
import './buttonstyles.css'


const Button = (props) => {
    

    return (
        <div>
            <button className={'Button'}  onClick={props.submit}>{props.buttonName}</button>
        </div>
    )
}

export default Button