import React from 'react';
import Input from '../../components/input'
import Button from '../../components/button'

function App() {
  return (
    <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', height: '100vh', flexDirection: 'column' }}>
      <p>Sign Up</p>
      <Input />
      <Button buttonName={'Button Test'} />
    </div>
  );
}

export default App;
