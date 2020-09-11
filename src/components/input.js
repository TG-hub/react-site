import React, { useState } from 'react'

function Input(props) {
    const [input, setInput] = useState('')
    const textSetter = (event) => setInput(event.target.value)

    const style = {fontFamily: Roboto,
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 80,
        lineHeight: 94,
        
        color: 'blue'}

    return (
        
        <div>
            <input style={{style}} type="text" onChange={textSetter} />
        </div>
    )
}

export default Input