import React  from 'react';
import "./style.css";
import img from "./back.png";
import { withRouter } from "react-router-dom";
class Back extends React.Component {
render(){
    const classN = this.props.className;
    return(
       <div className={`classN`}> onClick={() => this.props.history.goBack()} <img src={img}  className="imgb"/>  <p>Back</p></div>
    );
}
}
export default withRouter(Back);