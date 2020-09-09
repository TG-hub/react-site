import React, { useState } from 'react'

function Input(props) {
    const [input, setInput] = useState('')
    const textSetter = (event) => setInput(event.target.value)


    return (
        
        <div>
            <input type="text" onChange={textSetter} />
        </div>
    )
}

export default Input