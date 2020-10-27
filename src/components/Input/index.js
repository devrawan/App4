import React from 'react';
import "./style.css";
class Input extends React.Component {
    render() {
        return (
     <div className="inputt">
             <label htmlFor="em" className="e">{this.props.label}</label>
                  <input type="text"
                     onChange={this.props.fun}
                      value={this.props.val}
                         name={this.props.nam} className="input-e" placeholder={`Enter  your ${this.props.nam}`}></input>
                   
              
            </div>


        );
    }
}
export default Input;