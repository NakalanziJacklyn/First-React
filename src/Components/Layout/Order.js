import React, { Component } from "react";

class Order extends Component {
  render() {
    return (
      <div>
        <h4>
          plix make yo ordaer here
          <br />
          thank you for <br />
          trusting us w<br /> we will never betray <br /> yo trustnin us.
        </h4>

        <div class="custom-control custom-checkbox">
          <input
            type="checkbox"
            class="custom-control-input"
            id="defaultChecked1"
            name="defaultChecked2"
            value="eggs"
          />
          <label class="custom-control-label" for="defaultChecked1">
            Eggs
          </label>
        </div>

        <div class="custom-control custom-checkbox">
          <input
            type="checkbox"
            class="custom-control-input"
            id="defaultChecked2"
            name="fruit-1"
            value="mangoes"
          />
          <label class="custom-control-label" for="defaultChecked2">
            Magoes
          </label>
        </div>

        <div class="custom-control custom-checkbox">
          <input
            type="checkbox"
            class="custom-control-input"
            id="defaultChecked3"
            name="fruit-3"
            value="tomatoes"
          />
          <label class="custom-control-label" for="defaultChecked3">
            Tomatoes
          </label>
        </div>

        <div class="custom-control custom-checkbox">
          <input
            type="checkbox"
            class="custom-control-input"
            id="defaultChecked4"
            name="fruit-4"
            value="greens"
          />
          <label class="custom-control-label" for="defaultChecked4">
            Greens
          </label>
        </div>

        <div class="custom-control custom-checkbox">
          <input
            type="checkbox"
            class="custom-control-input"
            id="defaultChecked5"
            name="fruit-5"
            value="gnuts"
          />
          <label class="custom-control-label" for="defaultChecked5">
            Gnuts
          </label>
        </div>

        <div class="custom-control custom-checkbox">
          <input
            type="checkbox"
            class="custom-control-input"
            id="defaultChecked6"
            name="fruit-6"
            value="matooke"
          />
          <label class="custom-control-label" for="defaultChecked6">
            Matooke
          </label>
        </div>

        
          <input type="submit" value="Submit" />
        
      </div>
    );
  }
}

export default Order;
