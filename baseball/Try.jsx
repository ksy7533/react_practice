import React, { PureComponent } from 'react';

class Try extends PureComponent {
  render() {
    const { tryInfo } = this.props;

    return (
      <>
        <li>{tryInfo.try} 값, {tryInfo.result}</li>
      </>
    )
  }
};

export default Try;