import React  from 'react';
import "./style.css";
import  r1 from "./google.png";

class Button extends React.Component {
render(){
    const colo = this.props.colorr;
    return(
  
      <button type="button"   className={`cbtn ${colo==="#fff" ? "bbtn" : ""}`}  > <p className="txt" >{this.props.label} </p></button>
      
    );
}
}
export default Button;