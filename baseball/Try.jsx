import React, { Component } from 'react';

class Try extends Component {
  render() {
    return (
      <>
        <li>{this.props.tryInfo.try} 값, {this.props.tryInfo.result}</li>
      </>
    )
  }
};

export default Try;