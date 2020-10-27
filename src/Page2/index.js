import React from 'react';
import Back from '../components/Back';
import Input from '../components/Input';
import Button from '../components/Button';
import rr from "./google2.png";
import "./style.css";

class Page2 extends React.Component {
    state = {
        email: "",
        password: "",
        repassword: "",
        isChecked:""
    }
  



    fun = (e) => {
        const _val = e.target.value;
        const _nam = e.target.name;
        if(_nam=="email"){
            this.setState({
                email: _val
            })
        }else if(_nam=="password"){
            this.setState({
                password: _val
            })
        }

        else if(_nam=="repassword"){
    this.setState({
        repassword: _val
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
    }

    render() {
        return (
            <div className="conpage2">
                {/* <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet"></link> */}
                <Back />
                <div className="row-a"><p>Register Individual Account!</p></div>
                <div className="row-b"><p>For the purpose of gamers regulation, your details are required.</p></div>
                <form onSubmit={this.handleSubmit}>
                <Input val={this.state.email} fun={this.fun} sub={this.handleSubmit} nam="email" label="Email address*"/>
                <Input  val={this.state.password} fun={this.fun} sub={this.handleSubmit} nam="password"  label="Create password*"/>
                <Input  val={this.state.repassword} fun={this.fun} sub={this.handleSubmit} nam="repassword" label="Reapet password*"/>
                <div class="ui checkbox">
                    <input type="checkbox" onChange={this.toggleChange} class="hidden"   checked={this.state.isChecked} value={this.state.isChecked}  readonly="" tabindex="0"  /><label className="txtt">I agree to terms  conditions</label>
                </div>
                <Button  label="Register Account"/>
               
                <div><p className="or">OR</p></div>
                <Button colorr="#fff" label="Register with Google">  </Button>
                <img src={rr} className="im"/>
                </form>
            </div>


        );
    }
}
export default Page2;