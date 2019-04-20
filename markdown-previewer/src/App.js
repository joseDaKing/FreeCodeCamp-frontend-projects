import React, { 
  Component,  
} 
from 'react';

import {
  connect
}
from "react-redux";

import {
  onChange
}
from "./store/action";

import MarkdownPreviewer from "./components/markdownPreviewer";

class App extends Component {
  componentDidMount() {
    console.log(this.props.markDownText);  
  }

  componentDidUpdate() {
    console.log(this.props.markDownText);
  }

  render() {
    return (
      <MarkdownPreviewer 
      preview={this.props.markDownText} 
      onChange={e => this.props.onChange(e.target.value)}/>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onChange: text => dispatch(onChange.getAction({
    markDownText: text
  }))
});

const mapStateToProps = state => ({
  markDownText: state.markDownText
});

export default connect(mapStateToProps, mapDispatchToProps)(App);