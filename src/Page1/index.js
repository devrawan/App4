import React  from 'react';
import * as yup from 'yup';
import Quote from '../components/Quote';
import Logo from '../components/Logo';
import img2 from "./groupp.png";
import Back from '../components/Back';
import Input from '../components/Input';
import Button from '../components/Button';
import rr from "./google2.png";
import "./style.css";
import { withRouter } from "react-router-dom";

class Page1 extends React.Component {

    state = {
        email: "",
        password: "",
        repassword: "",
        isChecked:"",
        errors:{
            email:"",
            password:"",
            repassword:""
        }
    }
  



    fun = (e) => {
        const _val = e.target.value;
        const _nam = e.target.name;
        if(_nam==="email"){
            this.setState({
                [_nam]: _val
            })
           
        }else if(_nam==="password"){
            this.setState({
                [_nam]: _val
            })
           
        }

        else if(_nam==="repassword"){
    this.setState({
        [_nam]: _val
    })
    
}
        }
        toggleChange=()=>{
            this.setState({
                isChecked: !this.state.isChecked,
              });
        }


    handleSubmit = (e) => {
        e.preventDefault();
       const{email,password,repassword}=this.state;
      const registerschema = yup.object().shape({
          email : yup.string().email().required(),
          password: yup.string().matches().required(),
          repassword : yup.string().required()
      });
      registerschema.validate({email,password,repassword},{abortEarly:false}).then(data =>{
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


render(){
    return(
   <div className="conpage1" >
       <div className="leftt" >
       <Logo nalogo={"loggo"}/>
       <img src={img2} className="dot"/>
        <Quote/>
       </div>
       <div className="rightt">
               <Back className={"backk" } />
                <div className="row-a"><p>Register Individual Account!</p></div>
                <div className="row-b"><p>For the purpose of gamers regulation, your details are required.</p></div>
                <form action="#" onSubmit={this.handleSubmit}>
                <Input  status={"error"} error={this.state.errors.email} classlabel={"e"} type={"text"} classNamee={"input-e"} val={this.state.email} fun={this.fun}  nam={"email" }label={"Email address*"} placeholder={"Enter your Email"}/>
                <Input  status={"error"} error={this.state.errors.password} classlabel={"e"}  type={"password"} classNamee={"input-e"} val={this.state.password} fun={this.fun}  nam={"password"}  label={"Create password*"} placeholder={"Enter your password"}/>
                <Input  status={"error"} error={this.state.errors.repassword} classlabel={"e"}   type={"password"} classNamee={"input-e"} val={this.state.repassword} fun={this.fun} nam={"repassword"} label={"Reapet password*"} placeholder={"Enter your reapet password"}/>
                <div class="ui checkbox">
                    <input type="checkbox" onChange={this.toggleChange} class="hidden"   checked={this.state.isChecked} value={this.state.isChecked}  readonly="" tabindex="0"  /><label className="txtt">I agree to terms  conditions</label>
                </div>
                <Button  type="submit" className={"bb"} label="Register Account"/>
               
                <div><p className="or">OR</p></div>
                <Button  className={"bb"}  colorr="#fff" label="Register with Google">  </Button>
                <img src={rr} className="im"/>
                </form>




       </div>
      
        </div>


    );
}
}
export default Page1;