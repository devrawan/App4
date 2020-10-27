import React  from 'react';
import Quote from '../components/Quote';
import Logo from '../components/Logo';
import img2 from "./groupp.png";
import "./style.css";

class Page1 extends React.Component {
render(){
    return(
   <div className="conpage1">
        {/* <img src={img1}/> */}
       <Logo/>
       <img src={img2} className="dot"/>
        <Quote/>
        
        </div>


    );
}
}
export default Page1;