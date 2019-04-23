import React,{
  Component
} 
from 'react';

import {
  connect 
}
from "react-redux";

import {
  onUppdateTime,
  onSetIndicator,
  onSetIsSession,
  onReset
}
from "./store/actions";

import Pomodoro from "./components/pomodoro";

import {
  Timer, 
  timeStringToSeconds,
}
from "./utilities";

class App extends Component {
  breakTimer = new Timer();
  sessionTimer = new Timer();
  audio = new Audio("https://goo.gl/65cBl1");

  componentDidMount() {
    this.breakTimer
    .onStart(() => {
      this.props.onSetIndicator("break");
      this.audio.muted = false;
    })
    .onEnd(() => {
      this.sessionTimer.start();
      this.props.onSetIsSession(true);
      this.audio.play();
    })
    .onInterval(currentTime => {
      this.props.onUppdateTime(currentTime);
    });

    this.sessionTimer
    .onStart(() => {
      this.props.onSetIndicator("session");
    })
    .onEnd(() => {
      this.breakTimer.start();
      this.props.onSetIsSession(false);
      this.audio.play();
    })
    .onInterval(currentTime => {
      this.props.onUppdateTime(currentTime);
    });
  }

  onChangeBreakhHandler = event => {
    const seconds = timeStringToSeconds(event.target.value);
    this.breakTimer.setTime(seconds + 1);
  }

  onChangeSessionHandler = event => {
    const seconds = timeStringToSeconds(event.target.value);
    this.sessionTimer.setTime(seconds + 1);
  }

  onClickResetHandler = () => {
    this.sessionTimer.reset();
    this.breakTimer.reset();
    this.props.onReset();
    this.audio.muted = true;
  }

  onClickStopHandler = () => {
    if (this.props.isSession) {
      this.sessionTimer.stop();
    }
    else {
      this.breakTimer.stop();
    }
  }

  onClickContinueHandler = () => {
    if (this.props.isSession) {
      this.sessionTimer.continue();
    }
    else {
      this.breakTimer.continue();
    }
  }

  render() {
    return (
      <Pomodoro
      onChangeBreakLength={event => this.onChangeBreakhHandler(event)}
      onChangeSessionLength={event => this.onChangeSessionHandler(event)}
      
      onClickStart={() => this.sessionTimer.start()}
      onClickStop={() => this.onClickStopHandler()}
      onClickReset={() => this.onClickResetHandler()}
      onClickContinue={() => this.onClickContinueHandler()}
  
      indicator={this.props.indicator}
      display={this.props.currentTime}/>
    );
  }
}

const mapStateToProps = state => ({
  currentTime: state.currentTime,

  indicator: state.indicator,
  
  isSession: state.isSession
});

const mapDispatchToProps = dispatch => ({
  onUppdateTime: value => dispatch(
    onUppdateTime.getAction({seconds: value})
  ),

  onSetIndicator: value => dispatch(
    onSetIndicator.getAction({indicator: value})
  ),

  onSetIsSession: value => dispatch(
    onSetIsSession.getAction({bool: value})
  ),

  onReset: () => dispatch(onReset.getAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
