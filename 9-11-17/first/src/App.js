//import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
//
//
//class  App2 extends Component {
//  render(){
//    return(
//        <div>
//          <h1>hello world</h1>
//        </div>
//    );
//  }
//}
//
//
//class App extends Component {
//  render() {
//    return (
//      <div className="App">
//        <header className="App-header">
//          <img src={logo} className="App-logo" alt="logo" />
//          <h1 className="App-title">Welcome to React</h1>
//        </header>
//        <p className="App-intro">
//          To get started, edit <code>src/App.js</code> and save to reload.
//        </p>
//        <App2 />
//        <App2 />
//        <App2 />
//        <App2 />
//      </div>
//    );
//  }
//}
//
//
//export default App;
//

//
//import React, { Component } from 'react';
//import './App.css';
//
//class App extends Component {
//  constructor(){
//  super();
//    this.state = {
//      number : 0
//    }
//  }
//
//  Increment(){
//   this.setState({
//     number : this.state.number + 6
//   });
//  }
//
//  render() {
//    return (
//      <div>
//        <h1>{this.state.number}</h1>
//        <button onClick = {this.Increment.bind(this)} >Increment</button>
//      </div>
//    );
//  }
//}
//export default App;
//
//





//
//
//
//import React, { Component } from 'react';
//import './App.css';
//
//class App extends Component {
//  constructor(){
//    super();
//    this.state = {
//    number : 0
//    }
//  }
//  handleChange(event) {
//    this.setState({number : event.target.value});
//
//  }
//  render() {
//    return (
//        <div>
//          <h1>
//            {this.state.number}
//          </h1>
//          <input  onChange={this.handleChange.bind(this)} type = "text"/>
//        </div>
//    );
//  }
//}
//export default App;
//








import React, { Component } from 'react';
import './App.css';

class App extends Component {
 constructor(){
   super();
   this.state = {
    number : 0
   }
 }

  submit(number){
    let inputValue = (parseInt(this.refs.value.value) + parseInt(this.state.number));
    this.setState({
      number : inputValue
    });
  }

  render() {
    return (
      <div>
        <div>
          <h1>{this.state.number }</h1>
          <input ref = "value" type = 'text'/>
          <button onClick = {this.submit.bind(this)} >submit</button>
        </div>
      </div>
    );
  }
}
export default App;














