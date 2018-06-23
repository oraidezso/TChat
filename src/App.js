import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Input } from './Input';
import { LanguageSelector } from './LanguageSelector';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: 'en'
    };
  }
  handleLangChange = newLang => {
    this.setState({lang:newLang})
    //console.log(newLang);
  }
  render() {
    return (
      <div className="App">
       

        <LanguageSelector  handleLangChange={this.handleLangChange}/>
        <Input from={this.state.lang} to={'ru'} />
      </div>
    );
  }
}

export default App;
