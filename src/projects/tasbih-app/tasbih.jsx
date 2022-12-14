import { Component } from "react";

import "./style.scss";
class Tasbih extends Component {
  state = {
    count: 0,
    temp: 0,
  };

  handleAdd = () => {
    this.setState({ count: (this.state.count += 1) });
  };

  handleReset = () => {
    this.setState({ temp: this.state.count, count: 0 });
  };

  handleBack = () => {
    if (this.state.count === 0 && this.state.temp === 0) return;
    else if (this.state.count === 0 && this.state.temp !== 0) {
      this.setState({ count: this.state.temp, temp: 0 });
    } else {
      this.setState({ count: (this.state.count -= 1) });
    }
  };

  render() {
    return (
      <div className="container">
        <h1>TASBIH COUNTER</h1>
        <div className="counter" onClick={this.handleAdd}>
          <span className="fs-1">{this.state.count}</span>
        </div>
        <div className="buttons mt-5">
          <button className="btn btn-lg btn-danger" onClick={this.handleReset}>
            Reset
          </button>
          <button
            className="btn btn-lg btn-success mx-5"
            onClick={this.handleAdd}
          >
            Count
          </button>
          <button className="btn btn-lg btn-warning" onClick={this.handleBack}>
            Back
          </button>
        </div>
      </div>
    );
  }
}

export default Tasbih;
