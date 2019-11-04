const React = require('react');
const ReactDom = require('react-dom');
const { hot } = require('react-hot-loader/root');
const Baseball = require('./Baseball');
const Hot = hot(Baseball)

ReactDom.render(<Hot/>, document.querySelector('#root'));