import React, { Component } from 'react';
import { Translator } from './Translator';
import { LanguageSelector } from './LanguageSelector';
var url="/message.php";

export class Input extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      to:'en',
      from:'en',
      name:'',
      value: '',
      roomid: 1,
      uid:1
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.outLangChange = this.outLangChange.bind(this);
    this.inLangChange = this.inLangChange.bind(this);
    this.send = this.send.bind(this);
    this.setData = this.setData.bind(this);
  }
  handleChange(e) {
    this.setState({ value: e.target.value });
  }
  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }
  outLangChange = newLang => {
    this.setState({to:newLang});
  }
  inLangChange = newLang => {
    this.setState({from:newLang});
    this.props.handleLangChange(newLang);
  }
  setData(){
    this.setState({value:''});
  }
  send(){
    const data = new XMLHttpRequest();
    data.timeout=5000;
    data.addEventListener("load", this.setData);
    data.open("POST", url, true);
    data.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    data.send("message="+JSON.stringify(this.state));
    console.log(JSON.stringify(this.state));
  }

  render() {
    return (
      <div>
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-6" style={{textAlign:'left'}}>
              <h3 style={{display:"inline-block",margin:"0"}}>Name:</h3>
              <input className = "form-group" type="text" 
                onChange={this.handleNameChange} 
                value={this.state.name}
                style={{margin:"0"}}
              ></input>
            </div>
            <div className="col-md-6" style={{textAlign:'right'}}>
              <h3 style={{display:"inline-block",margin:"0"}}>Input in: </h3>
              <span> <LanguageSelector  handleLangChange={this.inLangChange}/> </span>
            </div>
          </div>
          <form method="post" action="">   
            <textarea name="message"
              className="form-control"
              id="input-content"
              onChange={this.handleChange}
              value={this.state.value}
            />
            <button type='button' value='send' onClick={this.send}>send</button>
          </form>
        </div>
        
        <div className="col-md-6">
          <h3 style={{display:"inline-block",margin:"0"}}>Output preview in: </h3>
          <span style={{display:"inline-block",paddingBottom:"1em"}}> <LanguageSelector  handleLangChange={this.outLangChange}/></span>
          <Translator from={this.state.from} to={this.state.to} value={this.state.value} />
        </div>
      </div>
    );
  }
}
