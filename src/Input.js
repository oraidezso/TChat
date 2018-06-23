import React, { Component } from 'react';
const translate = require('translate');

translate.engine = 'yandex';
translate.key = 'trnsl.1.1.20180623T001836Z.40216c12c055cb28.7ac66eee109cfbe489a0acb1cd6ce1707f75deb7';
translate.from = 'hu';
translate.to = 'en';
export class Input extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      to:props.to,
      from:props.from,
      value: '',
      tvalue:'' 
    };
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
    translate( e.target.value, { from: this.state.from, to: this.state.to }).then(text =>{
      this.setState({ tvalue: text });
      console.log(text);
    });
    console.log(e.target.value);
  }
  async getTranslated () {
    return { __html: this.state.value }
  }



  render() {
    //const translated = await translate(this.state.value, { to: 'hu' }.text)
    return (
      <div className="MarkdownEditor">
        <h3>Input</h3>    
        <textarea
          id="markdown-content"
          onChange={this.handleChange}
          defaultValue={this.state.value}
        />
        <h3>Output</h3>
        <div className="content">
          {this.state.tvalue}
        </div>
      </div>
    );
  }
}