import React from 'react';
import "./style.css";
class Input extends React.Component {
    render() {
        const {error} =this.props;
        return (
    <>
             <label htmlFor="em"  className={this.props.classlabel}>{this.props.label} </label>
             <input type={this.props.type}
                     onChange={this.props.fun}
                      value={this.props.val}
                         name={this.props.nam} 
                         className={`${this.props.classNamee} ${error && "errors"} `}
                          placeholder={this.props.placeholder}>
                          </input>
        {error && <div className={error && `${this.props.status}` }>{error}</div>}
           
</>

        );
    }
}
export default Input;
//error && "error"