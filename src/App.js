import React, { useState } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Sidebar from './Sidebar';
import Chat from "./Chat";
import Login from "./Login";
import { useStateValue } from "./StateProvider";


function App() {
  
 const [{ user },dispatch] = useStateValue();

  return (
    //BEM NAMING CONVENTION
    <div className="app">
 
    {!user ? (
      <Login />
    ) : (
          <div className="app__body">
              <Router>
                <Sidebar />
                <Switch>  
                  <Route exact path="/rooms/:roomId" component={Chat} />   
                  
                  <Route exact path="/" component={Chat} />

                </Switch>
              </Router>
          </div>
        )
    }
    </div>
  );
}

export default App;
