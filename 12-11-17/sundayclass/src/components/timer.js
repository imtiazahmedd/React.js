import React, { Component } from 'react';


class Timer extends Component{
    constructor(){
        super();
        this.state = {
            time : new Date().toLocaleString()
        };

       this.timeUpdate();
    }
    timeUpdate(){
    setInterval(() => {
            this.setState({
                time :  new Date().toLocaleString()
            });
        },1000
    )
    }
    
    render(){
        return(
            <div>
                {this.state.time}
            </div>
        );
    }
}

export default Timer;


