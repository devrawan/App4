import React,  { Component } from "react";
import {
  Link,
} from "react-router-dom";

// import React from 'react';
import * as yup from 'yup';
import Quote from '../components/Quote';
import Logo from '../components/Logo';
import Input from '../components/Input';
import Button from '../components/Button';
import img1 from "./imgg.png";
import img2 from './ico-google.png';
import img3 from "./ico-twitter.png";
import img4 from "./ico-in.png";
import img5 from "./ico-git.png";
import "./style.css";
import Page1 from '../Page1';
class Page3 extends React.Component {
    state = {
        emaill: "",
        passwordd: "",
    errors:{
        emaill:"",
        passwordd:"",
       
    }
    }

    fun = (e) => {
        const _val = e.target.value;
        const _nam = e.target.name;
        if(_nam=="emaill"){
            this.setState({
               _nam: _val
            })
        }else if(_nam=="passwordd"){
            this.setState({
                _nam: _val
            })
        }


        }

        

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        const{emaill,passwordd}=this.state;
        const registerschema = yup.object().shape({
            emaill : yup.string().email().required(),
            passwordd: yup.string().required(),
           
        });
        registerschema.validate({emaill,passwordd},{abortEarly:false}).then(data =>{
            console.log("valid")
            console.log(data)
        }).catch((err) =>{
            console.log("invalid")
            console.log(err)
            const errors ={};
            err.inner.forEach(({message, params}) => {
                errors[params.path]=message
            });
            this.setState({errors})
        })
    }



    render() {
        
        return (
            <div className="con33">
                <div className="left" >
                  <Logo nalogo={'loggo3'}/>
                  <Quote/>
                  <img src={img1} className="img-1"/>
               </div>
                <div className="right">
                  <p className="p11">Join the game!</p>
                  <p className="p22"> Go inside the best gamers social network!</p>
                  <div className="all">
                  <p className="ic-1"><img src={img5} className="img-2"></img></p>
                  <p className="ic-1"><img src={img4} className="img-2"></img></p>
                  <p className="ic-1"><img src={img3} className="img-2"></img></p>
                  <p className="ic-1"><img src={img2} className="img-2"></img></p>
                  </div>
                <p className="p33">OR</p>
                <form action="#" onSubmit={this.handleSubmit} >
                <Input  status={"errorss"} error={this.state.errors.emaill}  classlabel={"ee"}  type={"text"} classNamee={"input-p"} label={" Enter Your Email" }nam={"emaill"} placeholder={"Enter your email"}/>
                <Input   status={"errorss"} error={this.state.errors.passwordd} classlabel={"ee"}  type={"password"} classNamee={"input-p"} label={"Enter your password"} nam={"passwordd"} placeholder={"Enter your password"}/>
                <Button   type="submit"   className={"cbtn"} classlabel={"ee"}  label="Login"/>
               
               
             
                   <Link to='Register'><p className="p44"> Don’t have an account? <p className="register">Register</p> </p></Link> 
               
    
                </form>
                     </div>
            </div>

        );
    }
}
export default Page3;