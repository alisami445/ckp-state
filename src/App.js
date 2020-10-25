import React, {Component} from "react"
import "./App.css"
import aaaa from  "./aaaa.png"
class App extends Component{
  constructor(){
    super()
    this.state= {
      fullName:"ALi Sami chaouch ",bio: "hello world",profession: "html css js react ..... " ,imgSrc: aaaa , imgAlt:"erreur"
    ,show: false , time : 0 , 
   };
  }
  handelClick=() => this.setState({show : !this.state.show})
  componentDidMount = () => {
    setInterval(()=>{
      let time = new Date()
      time=time.getHours()+":"+time.getMinutes()
      this.setState({time:time})
    },1000)
  }
  
  render(){
    return(
      <>
      <center>
      {
        this.state.show &&
      <div className="all">
      <h3>fullName :  {this.state.fullName}</h3>
      <h3>bio  : {this.state.bio}</h3>
      <h3>profession  : {this.state.profession}</h3>
     <img src={this.state.imgSrc} alt={this.state.imgAlt}/>
     <br />
     </div>
  }
     
     <h3> {this.state.time} </h3>
   

     <button onClick={this.handelClick}> ClickMe</button>
     </center>
      </>
    );
  }
}
export default App ;