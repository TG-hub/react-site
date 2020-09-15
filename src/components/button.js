import React, { useState } from 'react'



const Button = (props) => {
    

    return (
        <div>
            <button  onClick={props.submit}>{props.buttonName}</button>
        </div>
    )
}

export default Button