import React, { Component } from 'react';

class Settings extends Component {
  state = { count: 0, text: '' };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState((state) => {
      if (state.count <= 0) return;
      return { count: this.state.count - 1 };
    });
  };

  reset = () => {
    this.setState({ count: 0 });
  };

  onChangeText = (e) => {
    this.setState({ text: e.currentTarget.value });
  };

  render() {
    const { count, text } = this.state;
    return (
      <div className="counter">
        <p className="count">Count: {count}</p>
        <section className="controls">
          <button onClick={this.increment}>Increment</button>
          <button onClick={this.decrement}>Decrement</button>
          <button onClick={this.reset}>Reset</button>
        </section>

        <div>
          <h3>Enter text: {text}</h3>
          <input onChange={this.onChangeText} type="text" />
        </div>
      </div>
    );
  }
}

export default Settings;
