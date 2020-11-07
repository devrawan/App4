
// import React, { Component } from 'react';
import React,  { Component } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';



import Page1 from "./Page1";
import Page3 from "./Page3";
import './App.css';

// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
export default function App() {
  return (
    <div className="App">

    <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Page3 />
          </Route>
          <Route path="/Register">
            <Page1 />
          </Route>
          
        </Switch>
      </BrowserRouter>
    </div>
  );
}
