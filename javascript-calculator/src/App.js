import React, { 
  Component 
} 
from 'react';

import {
  connect
}
from "react-redux";

import {
  onAddChar,
  onAddMath,
  onSubtractMath,
  onDivideMath,
  onMultipleMath,
  onDelete,
  onEqual
}
from "./store/actions";

import Calculator from "./components/calculator";

class App extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  eventFunctions = (char, fn) => {
    this.props.onAddChar(char);
    fn()
  }
  
  render() {
    return (
      <Calculator
      setDisplay={this.props.display}
      currentlyUsedOperator={this.props.value + this.props.operator}

      onClick0={() => this.props.onAddChar(0)}
      onClick1={() => this.props.onAddChar(1)}
      onClick2={() => this.props.onAddChar(2)}
      onClick3={() => this.props.onAddChar(3)}
      onClick4={() => this.props.onAddChar(4)}
      onClick5={() => this.props.onAddChar(5)}
      onClick6={() => this.props.onAddChar(6)}
      onClick7={() => this.props.onAddChar(7)}
      onClick8={() => this.props.onAddChar(8)}
      onClick9={() => this.props.onAddChar(9)}

      onClickAdd={() => this.eventFunctions("+", this.props.onAddMath)}
      onClickSubtract={() => this.eventFunctions("-", this.props.onSubtractMath)}
      onClickMultiple={() => this.eventFunctions("X", this.props.onMultipleMath)}
      onClickDivide={() => this.eventFunctions("/", this.props.onDivideMath)}

      onClickDelete={() => this.props.onDelete()}
      onClickEqual={() => this.props.onEqual()}/>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onAddChar: value => dispatch(
    onAddChar.getAction({
      char: value
    })
  ),

  onAddMath: () => dispatch(
    onAddMath.getAction()
  ),
  
  onSubtractMath: () => dispatch(
    onSubtractMath.getAction()
  ),

  onDivideMath: () => dispatch(
    onDivideMath.getAction()
  ),

  onMultipleMath: () => dispatch(
    onMultipleMath.getAction()
  ),

  onDelete: () => dispatch(
    onDelete.getAction()
  ),

  onEqual: () => dispatch(
    onEqual.getAction()
  )
});

const mapStateToProps = state => ({
  display: state.displayString,
  operator: state.usedOperator,
  value: state.value
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
