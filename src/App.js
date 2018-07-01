import React, { Component } from 'react';
import './App.css';
import { Input } from './Input';
import { Chat } from './Chat';
import { LanguageSelector } from './LanguageSelector';
var that;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: 'hu',
      roomid: 0,
      nroomid:1,
      uid: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.join = this.join.bind(this);
    that=this;
  }
  langChange = newLang => {
    this.setState({lang:newLang});
  }
  handleChange(e) {
    this.setState({ nroomid: e.target.value });
  }
  
 
  //
  scrollToBottom = () => {
    if(this.state.roomid!==0){
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
    }
  }
  componentDidMount() {
    //this.scrollToBottom();
  }
  componentDidUpdate() {
    this.scrollToBottom();
  }
  setId(){
    that.setState({
      uid:JSON.parse(this.responseText).max,
      roomid:that.state.nroomid
    })
  }
  join(){
    const data = new XMLHttpRequest();
    data.timeout=5000;
    data.addEventListener("load", this.setId);
    data.open("POST", '/join.php', true);
    data.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    data.send("message="+JSON.stringify(this.state));
  }

  render() {
    if (this.state.roomid===0){
      return(
        <div className="App" style={{margin:"2em"}} >
          <label>join room</label>
          <input className = "form-group" type="number" min="0"
                onChange={this.handleChange} 
                value={this.state.nroomid}
                style={{margin:"0"}}
          ></input>
          <button type='button' value='send' onClick={this.join}>join</button>
        </div>
      )
    }else{
    return (
      <div className="App" style={{margin:"2em"}} >
        <div className="row">
          <div className="col-md-6">
            <h1 style={{display:"inline-block",margin:"0"}}>Translate to: </h1> 
            <LanguageSelector  handleLangChange={this.langChange}/>
          </div>
          <div className="col-md-6"><h1>Original</h1></div>
        </div>
        <div className="row" >
          <div className="col-md-12" style={{height: "500px",overflow: "scroll",padding:"0"}} >
            <Chat lang={this.state.lang} scrollToBottom={this.scrollToBottom} roomid={this.state.roomid}/>
            <div style={{ float:"left", clear: "both" }}ref={(el) => { this.messagesEnd = el; }}>
            {/*dummy div for scrolling to bottom*/}
          </div>
          </div>
        </div>
        <div className="row" style={{marginTop:"1em"}}>
          <div className="col-md-12">
            <Input uid={this.state.uid} roomid={this.state.roomid}/>
          </div >
        </div>
      </div>
    );
  }}
}

export default App;
