import React  from 'react';
import "./style.css";
import img1 from "./Subtract.png";

import img2 from "./Subtract2.png";

class Logo extends React.Component {
render(){
    return(
   <div className="conlogo">
       <div ><img  src={img1}  className="img1-logo"/> </div>
       <div ><img  src={img2}  className="img2-logo"/></div>
       <div className="logo"><p>Gamers</p></div>
        </div>
    );
}
}
export default Logo;