import React, { Component } from 'react';
import "../../mine.css"

class Pricing extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <h1>Model of payment</h1>
                <h3>Cash on delivery</h3>
                <h3>credit card</h3>
                <h3>bank transfers</h3>
                <h3>mobile money</h3>
                <h3>and more</h3>
            </div>
         );
    }
}
 
export default Pricing;