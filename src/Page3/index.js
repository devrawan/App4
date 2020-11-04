import React from 'react';
import Quote from '../components/Quote';
import Logo from '../components/Logo';
import Input from '../components/Input';
import Page2 from '../Page2';
import Button from '../components/Button';
import img1 from "./imgg.png";
import img2 from './ico-google.png';
import img3 from "./ico-twitter.png";
import img4 from "./ico-in.png";
import img5 from "./ico-git.png";
import "./style.css";
class Page3 extends React.Component {
    // state = {
    //     email: "",
    //     password: "",
    // }

    // fun = (e) => {
    //     const _val = e.target.value;
    //     const _nam = e.target.name;
    //     if(_nam=="email"){
    //         this.setState({
    //             email: _val
    //         })
    //     }else if(_nam=="password"){
    //         this.setState({
    //             password: _val
    //         })
    //     }


    //     }


    // handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(this.state);
    // }



    render() {
        return (
            <div className="con3">
                <div className="left" >
                  <Logo/>
                  <Quote/>
                  <img src={img1} className="img-1"/>
               </div>
                <div className="right">
                  <p className="p11">Join the game!</p>
                  <p className="p22"> Go inside the best gamers social network!</p>
                  
                  <p className="ic-1"><img src={img5} className="img-2"></img></p>
                  <p className="ic-1"><img src={img4} className="img-2"></img></p>
                  <p className="ic-1"><img src={img3} className="img-2"></img></p>
                  <p className="ic-1"><img src={img2} className="img-2"></img></p>
                <p className="p33">OR</p>
                <form >
                <Input   classlabel={"ee"}  type={"text"} className={"input-p"} label={" Enter Your Email" }nam={"email"} placeholder={"Enter your email"}/>
                <Input  classlabel={"ee"}  type={"password"} className={"input-p"} label={"Enter your password"} nam={"password"} placeholder={"Enter your password"}/>
                <Button    className={"cbtn"} classlabel={"ee"}  label="Login"/>
                <p className="p44">Don’t have an account? <p className="register">Register</p> </p>
                </form>
                     </div>
            </div>

        );
    }
}
export default Page3;