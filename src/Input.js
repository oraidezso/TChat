import React, { Component } from 'react';
const translate = require('./translate');

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
      tvalue: '' 
    };
  }
  componentWillReceiveProps(nextProps) {
    if (this.state.value!==''){
      translate( this.state.value, { from: nextProps.from, to: nextProps.to }).then(text =>{
        this.setState({ tvalue: text });
      });
    }
  }
  handleChange(e) {
    this.setState({ value: e.target.value });
    if (e.target.value!==''){
      translate( e.target.value, { from: this.props.from, to: this.props.to }).then(text =>{
        this.setState({ tvalue: text });
      });
    }else{
      this.setState({ tvalue: '' });
    }
  }

  render() {
    return (
      <div>
        <div className="col-md-6">
          <h3>Input</h3> 
          <form>   
          <textarea
            className="form-control"
            id="input-content"
            onChange={this.handleChange}
            defaultValue={this.state.value}
          />
          <input type='submit' value='send'/>
          </form>
        </div>
        <div className="col-md-6">
          <h3>Output in {this.props.to}</h3>
          <div>
            {this.state.tvalue}
          </div>
        </div>
      </div>
    );
  }
}