//import React, { Component } from 'react';
//import './App.css';
//
//class App extends Component {
//    constructor(prop){
//        super();
//        this.state = {
//            num : 123,
//            name : prop.name
//        }
//
//    }
//    Increment(){
//        this.setState({num :  this.state.num + 5})
//    }
//  render() {
//    return (
//        <div>
//            <button onClick = {this.Increment.bind(this)}>
//            Increment
//            </button>
//            <h1>
//                {this.state.num}
//            </h1>
//            <h1>
//                {123}
//            </h1>
//            <h1>
//                {this.state.name}
//            </h1>
//            <h1>
//                ali
//            </h1>
//        </div>
//
//    );
//  }
//}
//export default App;


import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(prop){
        super();
      this.state = {
          number : 0
      }

    }
   Increment(){
       this.setState({
           number : this.state.number + 1
       });
   }
    Decrement() {
        if(this.state.number < 1){
            return (0)
        }

        this.setState({
            number: this.state.number - 1
        });
    }

    render(){
        return (
            <div class = 'counter'>
                <h1>Counter</h1>
                <h1>{this.state.number}</h1>
                <button onClick = {this.Increment.bind(this)}>Increment Button</button>
                <button onClick = {this.Decrement.bind(this)}>Decrement Button</button>
            </div>

        );
    }
}
export default App;





