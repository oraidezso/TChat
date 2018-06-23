import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { Input } from './Input';
import { LanguageSelector } from './LanguageSelector';


class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      inLang: 'en',
      outLang:'en',
      name:'',
      data:'asd'
    };
  }
  inLangChange = newLang => {
    this.setState({inLang:newLang});
    console.log(newLang);
  }
  outLangChange = newLang => {
    this.setState({outLang:newLang});
    console.log(newLang);
  }
  handleChange(e) {
    this.setState({ name: e.target.value });
  }
  render() {
    return (
      <div className="App">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-5">
            <h1>Translated</h1>
          </div>
          <div className="col-md-5">
            <h1>Original</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-2">
            <label>Your Name:</label>
            <input type="text" onChange={this.handleChange}></input>
            <label>Your lang:</label>
            <LanguageSelector  handleLangChange={this.inLangChange}/>
            <label>outlang:</label>
            <LanguageSelector  handleLangChange={this.outLangChange}/>
          </div>
          <div className="col-md-10 h-100">
            {this.state.name}
          </div>
        </div>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-10">
            <Input from={this.state.inLang} to={this.state.outLang} name={this.state.name}/>
          </div >
        </div>
        
        
      </div>
    );
  }
}

export default App;
