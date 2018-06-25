import React, { Component } from 'react';
import { Translator } from './Translator';

export class Input extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      to:props.to,
      from:props.from,
      name:props.name,
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
          <form method="post" action="">   
            <textarea name="message"
              className="form-control"
              id="input-content"
              onChange={this.handleChange}
              defaultValue={this.state.value}
            />
            <input hidden="hidden" readOnly name="lang" value={this.state.from}/>
            <input hidden="hidden" readOnly name="rid" value="1"/>{/*App statbe még be kell tenni, */}
            <input hidden="hidden" readOnly name="uid" value="1"/>{/*detto*/}
            <input hidden="hidden" readOnly name="name" value={this.state.name}/>
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
