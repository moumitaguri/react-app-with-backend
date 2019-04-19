import React, { Component } from "react";
import "./App.css";
import User from "./user";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { content: "", count: 0 };
  }

  componentDidMount() {
    fetch("/greet")
      .then(res => res.text())
      .then(text => {
        this.setState({ content: text });
      });
  }

  handleClick() {
    fetch(`/increment/${this.state.count}`)
      .then(res => res.text())
      .then(count => {
        this.setState({ count: count });
      });
  }

  render() {
    return (
      <main>
        <User />
        <div className="increment">
          <button onClick={this.handleClick.bind(this)}>Increment</button>
          <button>{this.state.count}</button>
        </div>
        <div />
      </main>
    );
  }
}

export default App;
