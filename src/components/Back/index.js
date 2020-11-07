import React  from 'react';
import "./style.css";
import img from "./back.png";
import { withRouter } from "react-router-dom";


class Back extends React.Component {
    
render(){

    const classN = this.props.className;
    return(

       <div onClick={() => this.props.history.goBack() }  className={`classN`}>  <img src={img}  className="imgb"/>  <p>Back</p></div>
    );
}
}
export default withRouter(Back);
