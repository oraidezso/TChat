import React, { Component } from 'react';
import { Translator } from './Translator';

export class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data:[{"id":"1","userid":"1","name":"Dezs\u0151","roomid":"1","modtime":"2018-06-23 13:21:03","lang":"hu","mes":"Hell\u00f3"},{"id":"2","userid":"1","name":"Dezs\u0151","roomid":"1","modtime":"2018-06-23 14:35:49","lang":"en","mes":"Who are you?"}],
        lang:props.lang,
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
        lang:nextProps.lang,  
    });
  }
  getData(){}
  messages(data,translate){

      return data.map(item=>
        <div className="row" key={item.id} >
            <div className="col-md-4" style={{textAlign:'right'}}>{item.name} <br />{item.modtime} </div>
            <div className="col-md-8" style={{textAlign:'left'}}>{
                translate?<Translator to={this.state.lang} from={item.lang} value={item.mes}/>:item.mes
            }</div>
        </div>
    );
  }
  render() {
    return (
      <div>
        <div className="col-md-6">{this.messages(this.state.data,true)}</div>
        <div className="col-md-6">{this.messages(this.state.data,false)}</div>
      </div>
    );
  }
}