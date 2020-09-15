import React, { useState } from 'react'

 export const styles = {fontFamily: 'Arial',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 16,
        borderRadius: 10,
        color: '#0569FF'}




const Input = (props) => {
    
    
    //const textSetter = (event) => setInput(event.target.value)

   

    return (
        
        <div>
            <input style={styles} type="text" onChange={props.textSetter} placeholder={props.placeholder} />
        </div>
    )
}

export default Input
