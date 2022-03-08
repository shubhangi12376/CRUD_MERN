import Login from './Compnents/login/login';
import Register from './Compnents/Register/Register';
import Home from './Compnents/Home/Home'
import './App.css';

import {BrowserRouter as Router , Switch , Route } from 'react-router-dom'
import { useState } from 'react';

function App() {

  const [user , setloginuser] = useState();

  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path = {"/"}>
            {
            user && user._id ? <Home setloginuser = {setloginuser} /> : <Login setloginuser = { setloginuser }/>
            } 
            </Route>
          <Route exact path = {"/login"}><Login setloginuser = {setloginuser} /></Route>
          <Route exact path = {"/register"}><Register /></Route>
        </Switch>
      </Router>
   
    
    </div>
    );
}

export default App;
