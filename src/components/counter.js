import React, { Component } from 'react';
class Counter extends Component {
   render() {
      const {counter,increment,decrement,reset} = this.props;
      return (
         <div className = "App">
            <div className ="counter">{counter}</div>

            <div className="btn">      
            
            
            <button onClick = {increment}>INCREMENT BY 1</button>
            
            <button onClick = {decrement}>DECREMENT BY 1</button>
            
            <button onClick = {reset}>RESET</button>
            
              </div>
           



         </div>
      );
   }
}
export default Counter;