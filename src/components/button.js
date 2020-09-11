import React, { useState } from 'react'
import {styles} from './input'
import Input, {input} from './input'


function Button (props) {
    const [submit, setSubmit] = useState('')
    const clickHandler = () => setSubmit(submit)

    return (
        <div>
            <button style={styles} onClick={clickHandler}>{props.buttonName}</button>
        </div>
    )
}

export default Button