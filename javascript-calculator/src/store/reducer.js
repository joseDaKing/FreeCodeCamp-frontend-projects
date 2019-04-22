import {
    onAddChar,
    onDelete,
    onEqual,
    onAddMath,
    onSubtractMath,
    onDivideMath,
    onMultipleMath
}
from "./actions.js";

import {
    concatObjects,
    copyObject,
}
from "../utilities";

const initState = {
    displayString: "",
    calcString: "",
    value: 0,
    isCalc: false,
    isStart: true,
    usedOperator: "",
};

export default (state = initState, action) => {
    switch(action.type) {
        case onDelete.getName:
            return copyObject(initState);

        case onEqual.getName:
            if (state.calcString) {
                return concatObjects(initState, {
                    displayString: `${
                        mathOperator(state.usedOperator, state)
                    }`,

                    calcString: `${
                        mathOperator(state.usedOperator, state)
                    }`,
                })
            }
        break;

        case onAddChar.getName: 
            return concatObjects(state, {
                calcString: state.calcString + calcStringValidation(action.char),
                displayString: `${state.displayString}${calcStringValidation(action.char)}`
            });

        case onAddMath.getName:
            return operatorReducerHelpFunction("+", state);

        case onMultipleMath.getName:
            return operatorReducerHelpFunction("*", state);

        case onSubtractMath.getName:
            return operatorReducerHelpFunction("-", state);

        case onDivideMath.getName:
            return operatorReducerHelpFunction("/", state);
        
        default:
            return state;
    }
}

function calcStringValidation(char) {
    switch(char) {
        case "-":
        case "+":
        case "/":
        case "X":
            return ""
        default:
            return char;
    }
}

function mathOperator(type, state) {
    let a = parseFloat(state.value);
    let b = parseFloat(state.calcString)

    switch(type) {
        case "+":
            return a + b;
            
        case "-":
            if (state.isStart) {
                a = b;
                b = 0;
            }

            return a - b;

        case "/":
            if (state.isStart) {
                a = b;
                b = 1;
            }

            return a / b;

        case "*":
            if (state.isStart) {
                a = 1;
            } 
            
            return a * b;

        default:
            return 0;
    }
}

function operatorReducerHelpFunction(operator, state) {
    return concatObjects(state, {
        displayString: "",
        calcString: "",
        value: mathOperator(operator, state),
        usedOperator: operator,
        isStart: false
    });
}