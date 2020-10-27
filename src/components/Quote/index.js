import React ,{Component} from 'react';
import quotee from "./quot.png";
import vector from "./vector.png";
import "./style.css";
class Quote extends Component {
render(){
    return(
<div className="conquote" >
<div className="row-1"><img src={quotee}/></div>
<div className="row-2"><p>I always observe the people who pass by when I ride an escalator. I'll never see most of
     them again, so I imagine a lot of things about their lives... about the day ahead of them.</p> </div>
<div className="row-3"><p>Hideo Kojima</p></div>
<div className="row-4"> <img src={vector}/></div>
</div>
    );
}
}
export default Quote;