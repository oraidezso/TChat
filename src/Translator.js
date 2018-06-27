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
        to:props.to,
        from:props.from,
        tvalue: props.value 
      };
    }
    componentDidMount() {
      if (this.state.tvalue.length!==0){
        translate( this.state.tvalue, { from: this.state.from, to: this.state.to }).then(text =>{
          this.setState({ tvalue: text });
        });
      }else {this.setState({ tvalue: '' });}
    }
    componentWillReceiveProps(nextProps) {
      if (nextProps.value.length!==0){
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
