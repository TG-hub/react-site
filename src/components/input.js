import React, { useState } from 'react'

function Input(props) {
    const [input, setInput] = useState('')
    const textSetter = (event) => setInput(event.target.value)

    const style = {fontFamily: 'Arial',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 16,
        borderRadius: 10,
        color: '#0569FF'}

    return (
        
        <div>
            <input style={style} type="text" onChange={textSetter} placeholder={props.placeholder} />
        </div>
    )
}

export default Input