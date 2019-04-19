import React, { 
  Component, 
  Fragment 
} 
from 'react';

import {
  connect
} 
from "react-redux";

import {
  selectRandomQoute, 
  initQoutes
} 
from "./store/actions";

import QoutePost from "./components/qoutePost/qoutePost";

class App extends Component {
  componentDidMount() {
    this.props.onInitQoutes();
  }

  render() {
    const {
      quote, 
      author
    } = this.props.currentQoute;
    
    return (
      <Fragment>
        <QoutePost 
          text={quote} 
          source={author} 
          onClick={() => this.props.onSelectRandomQoute(
            this.props.qoutesAmount,
            this.props.qoutes
          )}/>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  currentQoute: state.selectRandomQoute.currentQoute,
  qoutes: state.setQoutes.qoutes,
  qoutesAmount: state.setQoutes.qoutesAmount
});

const mapDispatchToProps = dispatch => ({
  onInitQoutes: () => dispatch(initQoutes()),

  onSelectRandomQoute: (amount, qoutes) => dispatch(
    selectRandomQoute.getAction({
      qoutesAmount: amount,
      qoutes: qoutes
    })
  )
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
