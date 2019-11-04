const React = require('react');
const { Component } = React;

class Baseball extends Component {
  state = {
    test: 'test'
  }

  render() {
    return (
      <>
        <div>{this.state.test}</div>
      </>
    )
  }
}

module.exports = Baseball;