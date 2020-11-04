import React  from 'react';
import "./style.css";
import img from "./back.png";
class Back extends React.Component {
render(){
    const classN = this.props.className;
    return(
       <div className={`classN`}>  <img src={img}  className="imgb"/>  <p>Back</p></div>
    );
}
}
export default Back;
