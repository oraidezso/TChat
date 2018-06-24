import React, { Component } from 'react';
import { Translator } from './Translator';

export class Input extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      to:props.to,
      from:props.from,
      value: ''
    };
  }
  handleChange(e) {
    this.setState({ value: e.target.value });
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      to:nextProps.to,
      from:nextProps.from
    })
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
          <Translator from={this.state.from} to={this.state.to} value={this.state.value} />
        </div>
      </div>
    );
  }
}