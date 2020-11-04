
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Page1 from "./Page1";
import Page3 from "./Page3";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <Page3 />
      {/* <Router>
 <div>
   <ul>
     <li>
       <Link to="/">Page3</Link>
     </li>
     <li>
       <Link to="/about">Page1</Link>
     </li>
   </ul>

   <Switch>
   <Route exact path="/">
<Page3/>
     </Route>
     <Route path="/about">
      <Page1/>
     </Route>
    
   </Switch>
 </div>
</Router> */}

    </div>
  );
}
