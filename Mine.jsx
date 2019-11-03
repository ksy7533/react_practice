const React = require('react');
const { Component } = React;

class Mine extends Component {
  state = {
    title: 'test'
  }

  render() {
    return <h1>{this.state.title}</h1>
  }
}

module.exports = Mine;