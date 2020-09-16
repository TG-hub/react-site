import React from 'react';
import Input from '../../components/input'
import Button from '../../components/button'
import { useState } from 'react';
import '../../App.css'




  function App(props) {
  
  const [input, setInput] = useState('')
  const [inputTwo, setInputTwo] = useState('')
  
  const onClick = () => {
    props.history.push('/home')
  }

  const submitter = () => {
   return (
   <div>
   {input.length===0 || inputTwo.length===0 ? null : onClick() }
  </div>
   )
}



  return (
    <div className='Background' >
      <h1>Please sign up to get started!</h1>
      <div style={{alignSelf: 'center', textAlign: 'center', display: 'flex', justifyContent: 'center', height: '50vh', width: '50vh', flexDirection: 'column', backgroundColor: '#F59606', borderRadius: '20px', gap: '20px' }}>
      <Input  textSetter={(event) => setInput(event.target.value)} placeholder={'Name'}   />
      <Input textSetter={(event) => setInputTwo(event.target.value)} placeholder={'Email'}   />
      <Button  buttonName={'Sign up'} submit={submitter}/>
      </div>
    </div>
  );
}

export default App;
