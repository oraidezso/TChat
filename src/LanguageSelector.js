import React, { Component } from 'react';
import { langs } from './langs';

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
        <span className="LanguageSelector">
          <select onChange={this.handleChange} className="selectpicker" >
            {/*Object.entries(map).map(([key, value])=>(
              <option value={value}>{key}</option>
            ))*/}
            <option value="hu">hungarian</option>
            <option value="en">english</option>
            <option value="ru">russian</option>
            <option value="fr">french</option>
            <option value="de">german</option>
            <option value="zh">chinese</option>
            <option value="fi">finnish</option>
          </select>
        </span>
      );
    }
}


