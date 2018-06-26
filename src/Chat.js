import React, { Component } from 'react';
import { Translator } from './Translator';
var asd=0;
var url="/data.php";
var that;
var refreshInterval=2500;
export class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data:[],
        lang:props.lang,
    };
    this.scrollToBottom=props.scrollToBottom;
    that=this;
  }
  componentDidMount() {
    this.loadData(url);
    this.interval = setInterval(() => this.loadData(url), refreshInterval);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
        lang:nextProps.lang,  
    });
  }
  loadData(href){
    const data = new XMLHttpRequest();
    data.timeout=3000;
    data.addEventListener("load", this.setData);
	data.open("GET", href, true);
    data.send();
  }
  setData(){
      if(Object.keys(that.state.data).length< Object.keys(JSON.parse(this.responseText)).length || asd===0){
        that.setState({data:JSON.parse(this.responseText)})
        that.scrollToBottom();
        asd+=1;
      }
  }

  
  messages(data){
      var count=0;
      return data.map(item=>
        <div className="row" key={item.id} style={
            (count+=1)%2===0
            ?{backgroundColor:"#efe",color:"#"+((item.userid*150+item.roomid*17+item.name.length)%1000),paddingTop:'0.2em',paddingBottom:'0.2em'}
            :{backgroundColor:"#fff",color:"#"+((item.userid*150+item.roomid*17+item.name.length)%1000),paddingTop:'0.2em',paddingBottom:'0.2em'}
        }>
            <div className="col-md-2" style={{textAlign:'right'}}><b>{item.name}</b>  ({item.lang})<br />{item.modtime} </div>
            <div className="col-md-4" style={{textAlign:'left'}}>
                {item.mes}
            </div>
            <div className="col-md-2" style={{textAlign:'right'}}><b>{item.name}</b> ({item.lang})<br />{item.modtime} </div>
            <div className="col-md-4" style={{textAlign:'left'}}>
                <Translator to={this.state.lang} from={item.lang} value={item.mes}/>
            </div>
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
