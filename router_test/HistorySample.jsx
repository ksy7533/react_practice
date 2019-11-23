import React, { Component } from "react";

class HistorySample extends Component {
  handleGoBack = () => {
    console.log("goBack");
    this.props.history.goBack();
  };

  handleGoHome = () => {
    this.props.history.push("/");
  };

  componentDidMount = () => {
    console.log("didMount");
    this.unblock = this.props.history.block("정말가나요");
  };

  componentWillUnmount = () => {
    console.log("unMount");
    if (this.unblock) {
      this.unblock();
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.handleGoBack}>뒤로</button>
        <button onClick={this.handleGoHome}>홈으로</button>
      </div>
    );
  }
}

export default HistorySample;
