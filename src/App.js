import React, {Component} from "react"
import "./App.css"
import aaaa from  "./aaaa.png"
class App extends Component{
  constructor(){
    super()
    this.state= {
      fullName:"ALi Sami chaouch ",bio: "hello world",profession: "html css js react ..... " ,imgSrc: aaaa , imgAlt:"erreur"
    ,show: true , time : 0 , tl: new Date().toLocaleTimeString()
   };
  }
  hide(){
    this.setState({
      show: false
    })
  }
  componentDidMount = () => {
    setInterval(()=>{
      this.setState(ngu=> ({
        time:ngu.time + 1 ,
        tl: new Date().toLocaleTimeString()
      }));
    },1000)
  }
  
  render(){
    return(
      <>
      <center>
      
      {
        this.state.show?
      <div className="all">
      <h3>fullName :  {this.state.fullName}</h3>
      <h3>bio  : {this.state.bio}</h3>
      <h3>profession  : {this.state.profession}</h3>
     <img src={this.state.imgSrc} alt={this.state.imgAlt}/>
     <br />
     
     
     <h3>y have   {this.state.time} s in this web</h3>
    <h3>time : {this.state.tl}</h3>
   </div>
    :null
      }
     <button onClick={()=>this.hide()}> ClickMe</button>
     </center>
      </>
    );
  }
}
export default App ;