
import React, { Component } from 'react';
import './App.css';
import Page1 from "./Page1";
import Page2 from "./Page2";
class App extends Component {
  render() {
    return (
      <div className="App">
    <Page1 />
<Page2 />
      </div>


    );
  }
}
export default App;