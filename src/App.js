
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

 import Page3 from "./Page3";
import Page1 from "./Page1";
import Page2 from "./Page2";
 import './App.css';

 export default function App() {
  return (
      <div className="App">
 {/* <Router>
 <div>
   <ul>
     <li>
       <Link to="/">Page1</Link>
     </li>
     <li>
       <Link to="/about">Page3</Link>
     </li>
   </ul>

   <Switch>
   <Route exact path="/">
<Page2 />
     </Route>
     <Route path="/about">
      <Page3/>
     </Route>
    
   </Switch>
 </div>
</Router> */}
</div>
    );
  }
