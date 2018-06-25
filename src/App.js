import React, { Component } from 'react';
import './App.css';
import { Input } from './Input';
import { Chat } from './Chat';
import { LanguageSelector } from './LanguageSelector';


class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      inLang: 'en',
      outLang:'en',
      name:"",
      data:'asd'
    };
  }
  inLangChange = newLang => {
    this.setState({inLang:newLang});
  }
  outLangChange = newLang => {
    this.setState({outLang:newLang});
  }
  handleChange(e) {
    this.setState({ name: e.target.value });
  }

  //
  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  }
  componentDidMount() {
    this.scrollToBottom();
  }
  componentDidUpdate() {
    this.scrollToBottom();
  }

  render() {
    return (
      <div className="App" style={{margin:"2em"}} >
      {this.state.name}
        <div className="row">
          <div className="col-md-6"><h1>Translated</h1></div>
          <div className="col-md-6"><h1>Original</h1></div>
        </div>
        <div className="row" style={{padding:"1em"}} >
          <div className="col-md-12" style={{height: "500px",overflow: "scroll",padding:"0"}} >
            <Chat lang={this.state.inLang} />
            <div style={{ float:"left", clear: "both" }}ref={(el) => { this.messagesEnd = el; }}>
            {/*dummy div for scrolling to bottom*/}
          </div>
          </div>
        </div>
        <div className="row">
        <div className="col-md-2">
            <label>Your Name:</label>
            <input className = "form-group" type="text" onChange={this.handleChange} value={this.state.name}></input>
            <div className="row" >
              <div className="col-md-6">
                <label>Your lang:</label> <br />
                <LanguageSelector  handleLangChange={this.inLangChange}/>
              </div>
              <div className="col-md-6">
                <label>Outlang:</label> <br />
                <LanguageSelector  handleLangChange={this.outLangChange}/>
              </div>
            </div>
          </div>
          <div className="col-md-10">
            <Input from={this.state.inLang} to={this.state.outLang} name={this.state.name}/>
          </div >
        </div>
        
        
      </div>
    );
  }
}

export default App;
