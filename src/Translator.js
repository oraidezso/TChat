import React, { Component } from 'react';
const translate = require('./translate');
translate.engine = 'yandex';
translate.key = 'trnsl.1.1.20180623T001836Z.40216c12c055cb28.7ac66eee109cfbe489a0acb1cd6ce1707f75deb7';
translate.from = 'hu';
translate.to = 'en';
export class Translator extends Component {
    constructor(props) {
      super(props);
      this.state = {
        tvalue: '' 
      };
    }
    componentWillReceiveProps(nextProps) {
      if (nextProps.value!==''){
        translate( nextProps.value, { from: nextProps.from, to: nextProps.to }).then(text =>{
          this.setState({ tvalue: text });
        });
      }else {this.setState({ tvalue: '' });}
    }
    render() {
        return (
            <div>
                {this.state.tvalue}
            </div>
        );
    }
}
