//import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
//import * as firebase from 'firebase';
//
//class App extends Component {
//  componentWillMount(){
//    firebase.database().ref('/todo').on('value',(data)=>{
//      let obj = data.val();
//      //console.log(obj,"obj value");
//      this.setState({todo: obj});
//    })
//  }
//  constructor(){
//    super();
//    this.state = {
//      todo: []
//
//    }
//  }
//
//  submit(){
//   let val =  {todo : this.refs.text.value};
//    console.log(val,"val");
//    firebase.database().ref('/').child('todo').push(val);
//
//
//  }
//  delete(keys){
//    "use strict";
//    console.log(keys,'index');
//    firebase.database().ref('/todo').child(keys).remove().then(()=>{
//      alert('todo delete')
//    })
//  }
//
//  render() {
//    console.log(this.state.todo,"obj value");
//
//    let todos = Object.keys(this.state.todo).map((key, index) => {
//      let val = this.state.todo[key];
//      let IdKeys = key;
//      return (
//          <h2 key={index}>{val.todo} <button onClick={this.delete.bind(this, IdKeys)}>X</button></h2>
//      )
//    })
//    return (
//      <div className="App">
//        <header className="App-header">
//          <img src={logo} className="App-logo" alt="logo" />
//          <h1 className="App-title">Welcome to React</h1>
//        </header>
//        <p className="App-intro">
//          To get started, edit <code>src/App.js</code> and save to reload.
//        </p>
//        <input type="text" ref = "text"/>
//        <button onClick = {this.submit.bind(this)}> submit</button>
//
//        <div>
//          <center>
//            {todos}
//          </center>
//        </div>
//      </div>
//    );
//  }
//}
//
//export default App;












import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';

class App extends Component {
  componentWillMount(){
    firebase.database().ref('/todo').on('value',(data)=>{
      let obj = data.val();
      this.setState({todo: obj});
    })
  }
  constructor(){
    super();
    this.state = {
      todo: []

    }
  }

  submit(){
    let val =  {todo : this.refs.text.value};
    console.log(val,"val");
    firebase.database().ref('/').child('todo').push(val);


  }
  delete(keys){
    "use strict";
    console.log(keys,'index');
    firebase.database().ref('/todo').child(keys).remove().then(()=>{
      alert('todo delete')
    })
  }

  render() {
    let todos = Object.keys(this.state.todo).map((key, index) => {
      let val = this.state.todo[key];
      let IdKeys = key;
      return (
          <h2 key={index}>{val.todo} <button onClick={this.delete.bind(this, IdKeys)}>X</button></h2>
      )
    })
    return (
        <div className="App">
          <input type="text" ref = "text"/>
          <button onClick = {this.submit.bind(this)}> submit</button>

          <div>
            <center>
              {todos}
            </center>
          </div>
        </div>
    );
  }
}

export default App;


