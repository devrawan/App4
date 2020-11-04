import React from 'react';
import "./style.css";
class Input extends React.Component {
    render() {
        return (
    <>
             <label htmlFor="em"  className={this.props.classlabel}>{this.props.label} </label>
             <input type={this.props.type}
                     onChange={this.props.fun}
                      value={this.props.val}
                         name={this.props.nam} 
                         className={this.props.className}
                          placeholder={this.props.placeholder}>
                          </input>
                   
           
</>

        );
    }
}
export default Input;