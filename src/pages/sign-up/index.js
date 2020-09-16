import React from 'react';
import Input from '../../components/input'
import Button from '../../components/button'
import { useState } from 'react';
import '../../App.css'
import './sign-up.css'




  function SignUp(props) {
  
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
      <div className='Signup'>
      <Input  textSetter={(event) => setInput(event.target.value)} placeholder={'Name'}   />
      <Input textSetter={(event) => setInputTwo(event.target.value)} placeholder={'Email'}   />
      <Button  buttonName={'Sign up'} submit={submitter}/>
      </div>
    </div>
  );
}

export default SignUp;
