import React from 'react';
import Input from '../../components/input'
import Button from '../../components/button'
import { useState } from 'react';
import '../../App.css'

function App() {
  
  const [input, setInput] = useState('')
  const [inputTwo, setInputTwo] = useState('')

  return (
    <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', height: '100vh', flexDirection: 'column' }}>
      <p>Sign Up</p>
      <Input  textSetter={(event) => setInput(event.target.value)} placeholder={'input 1'}   />
      <Input textSetter={(event) => setInputTwo(event.target.value)} placeholder={'input 2'}   />
      <Button  buttonName={'Button Test'} submit={() => console.log(input, inputTwo)}/>
    </div>
  );
}

export default App;
