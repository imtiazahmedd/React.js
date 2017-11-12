import React, { Component } from 'react';

class Counter extends Component {
    constructor(){
        super();
        this.state = {
            number : 0

        };
    }
    Increment(){
        this.setState({
            number : this.state.number + 1
        });

    }
    Decrement(){
        console.log(this.state.number,'number');
        if(this.state.number == 0){
            return (0)
        }
        this.setState({
            number : this.state.number - 1
        });
    }

    render(){
        return(
          <div>
              <center>
                  <button onClick = {this.Increment.bind(this)}>Increment</button>
                  <h1>
                      {this.state.number}
                  </h1>
                  <button onClick = {this.Decrement.bind(this)}>Decrement</button>
              </center>
          </div>
        );
    }

}
export default Counter;
