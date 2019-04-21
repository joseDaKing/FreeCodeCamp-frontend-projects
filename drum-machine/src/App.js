import React, { 
  PureComponent,
  Fragment
} 
from 'react';

import DrumMachine from "./components/drumMachine"

import {
  soundTypes1,
  soundTypes2
} 
from "./globals"

import * as actions from "./store/actions/index";

import {
  connect 
}
from "react-redux";

//this.audio.volume = (1 - 0); 0 är lägst, 1 är högst
//this.audio.muted = false;
//this.audio.defaultMuted = false;

class App extends PureComponent {
  componentDidMount() { 
    this.playSound = url => {
      const audio = new Audio(url);
      audio.muted = !this.props.power; 
      audio.volume = (this.props.volume/100);     
      audio.play();
    }

    this.getSoundType = key => (
      this.props.bank? soundTypes2[key]: soundTypes1[key]
    )
    
    this.setSoundType = key => {
      key = key.toLowerCase();
      
      const info = this.getSoundType(key);

      if (info) {
        this.playSound(info.url)
        this.props.onSetSoundType(info.id);
      }
    }

    document.addEventListener("keydown", event => {
      this.setSoundType(event.key);
    })
  }

  render() {
    return (
      <Fragment>
        <DrumMachine
        onVolumeChange={event => this.props.onSetVolume(event.target.value)}
        volumeValue={this.props.volume}
        soundType={this.props.soundType}

        onClickPower={() => this.props.onTogglePower()}
        setPowerValue={this.props.power}

        onClickBank={() => this.props.onToggleBank()}
        setBankValue={this.props.bank}

        onClickQ={() => this.setSoundType("Q")}
        onClickW={() => this.setSoundType("W")}
        onClickE={() => this.setSoundType("E")}

        onClickA={() => this.setSoundType("A")}
        onClickS={() => this.setSoundType("S")}
        onClickD={() => this.setSoundType("D")}

        onClickZ={() => this.setSoundType("Z")}
        onClickX={() => this.setSoundType("X")}
        onClickC={() => this.setSoundType("C")}/>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  volume: state.volume,
  
  bank: state.bank,
  
  power: state.power,

  soundType: state.soundType
});

const mapDispatchToProps = dispatch => ({
  onTogglePower: () => dispatch(actions.togglePower.getAction()),
  
  onToggleBank: () => dispatch(actions.toggleBank.getAction()),
  
  onSetVolume: value => dispatch(actions.setVolume.getAction({
    volume: value
  })),

  onSetSoundType: soundType => dispatch(actions.setSoundType.getAction({
    soundType: soundType
  }))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
