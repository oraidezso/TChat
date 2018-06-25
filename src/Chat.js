import React, { Component } from 'react';
import { Translator } from './Translator';
var url="/data.php";
var dat=[];

export class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data:[],
        lang:props.lang,
    };
    this.setData=this.setData.bind(this);
    this.refresh=this.refresh.bind(this);

  }
  componentDidMount() {
    this.interval = setInterval(() => this.refresh(), 10000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  refresh(){
    this.loadData(url);
    if(this.state.data!==dat){
        this.setData();
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
        lang:nextProps.lang,  
    });
    
  }
  loadData(href){
    var data = new XMLHttpRequest();
    data.addEventListener("load", this.parseData);
	data.open("GET", href, true);
    data.send();
  }
  parseData(){
      console.log(this.responseText);
      dat=JSON.parse(this.responseText);
  }
  setData(){
    this.setState({data:dat});
  }
  
  messages(data){
      return data.map(item=>
        <div className="row" key={item.id} >
            <div className="col-md-2" style={{textAlign:'right'}}>{item.name} <br />{item.modtime} </div>
            <div className="col-md-4" style={{textAlign:'left'}}>
                <Translator to={this.state.lang} from={item.lang} value={item.mes}/>
            </div>
            <div className="col-md-2" style={{textAlign:'right'}}>{item.name} <br />{item.modtime} </div>
            <div className="col-md-4" style={{textAlign:'left'}}>{item.mes}</div>
        </div>
    );
  }
  render() {
    return (
        <div className="chat">
            <div className="col-md-12">{this.messages(this.state.data,true)}</div>
        </div>
    );
  }
}
