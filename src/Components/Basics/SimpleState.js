import React, { Component } from "react";

class SimpleState extends Component {
  constructor() {
    super();
    this.state = {
      greeting: "hello",
      world: "World",
      hands: 2,
      legs: 2
    };
    this.name = "Fresh Harvests";
    this.age = 30;
    this.changeState = this.changeState.bind(this);
    this.changeStateWorld = this.changeStateWorld.bind(this);
    this.t= this.changeStateHand.bind(this);
  }
  changeState() {
    if (this.state.world == "With your favourite Dishes") {
      this.setState({ greeting: "Look no farther" });
    } else if (this.state.world == "For we deliver to your door way.") {
      this.setState({ greeting: "Flexiability is our motto." });
    }
  }
  changeStateWorld() {
    this.setState({ world: "Fresh Harvest" });
  }

  componentDidMount() {
    this.changeState();
  }

  changeStateHand =()=> {
    this.setState({ hands: 1 });
  };

  render() {
    return (
      <div>
        <h1>{this.state.hands}</h1>
        <h1>
          {this.state.greeting} {this.state.world}
        </h1>
        <button onClick={this.changeState}>Click me to change greeting</button>
        <button onClick={this.changeStateWorld}>
          Click me to change world
        </button>
        <h3>{this.name}</h3>
        <h3>{this.age}</h3>

        <button onClick={this.changeStateHand}>hands button</button>
      </div>
    );
  }
}

export default SimpleState;
