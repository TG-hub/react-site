import React, { useState } from 'react'
import '../App.css'

 /*export const styles = {fontFamily: 'Arial',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 16,
        borderRadius: 10,
        color: '#0569FF'}

*/


const Input = (props) => {
    
    
    //const textSetter = (event) => setInput(event.target.value)

   

    return (
        
        <div>
            <input className={'Input'} type="text" onChange={props.textSetter} placeholder={props.placeholder} />
        </div>
    )
}

export default Input
