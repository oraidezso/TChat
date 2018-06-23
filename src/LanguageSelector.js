import React, { Component } from 'react';
export class LanguageSelector extends Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = {
        value: 'en',
      };
    }
  
    handleChange(e) {
      this.setState({ value: e.target.value });
      this.props.handleLangChange(e.target.value);
    }
  
    render() {
      return (
        <div className="LanguageSelector">
          <select onChange={this.handleChange} className="form-control" >
            <option value="en">en</option>
            <option value="hu">hu</option>
            <option value="ru">ru</option>
          </select>
        </div>
      );
    }
  }