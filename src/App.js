import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/home'
import SignUp from './pages/sign-up'
import Confirmation from './pages/confirmation'
import Item from './pages/item'
import Checkout from './pages/checkout'
import ContextSource from './context/root'

function App() {
  return (
    <ContextSource>
    <Router>
      <Switch>
        <Route exact path='/' component={SignUp}/>
        <Route path='/confirmation' component={Confirmation} />
        <Route path='/checkout' component={Checkout} />
        <Route path='/home' component={Home} />
        <Route path='/Item/:id' component={Item} />
      </Switch>
    </Router>
    </ContextSource>
  );
}

export default App;
