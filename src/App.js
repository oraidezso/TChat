import React, { Component } from 'react';
import './App.css';
import { Input } from './Input';
import { Chat } from './Chat';
import { LanguageSelector } from './LanguageSelector';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: 'hu',
      data:'asd'
    };
  }
  langChange = newLang => {
    this.setState({lang:newLang});
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
        <div className="row">
          <div className="col-md-6">
            <h1 style={{display:"inline-block",margin:"0"}}>Translate to: </h1> 
            <LanguageSelector  handleLangChange={this.langChange}/>
          </div>
          <div className="col-md-6"><h1>Original</h1></div>
        </div>
        <div className="row" >
          <div className="col-md-12" style={{height: "500px",overflow: "scroll",padding:"0"}} >
            <Chat lang={this.state.lang} scrollToBottom={this.scrollToBottom}/>
            <div style={{ float:"left", clear: "both" }}ref={(el) => { this.messagesEnd = el; }}>
            {/*dummy div for scrolling to bottom*/}
          </div>
          </div>
        </div>
        <div className="row" style={{marginTop:"1em"}}>
          <div className="col-md-12">
            <Input/>
          </div >
        </div>
      </div>
    );
  }
}

export default App;
