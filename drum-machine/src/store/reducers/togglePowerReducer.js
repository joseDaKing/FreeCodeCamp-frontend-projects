import {
    togglePower
}
from "../actions/index";

const initState = true;

const reducer = (state = initState, action) => {
    switch(action.type) {
        case togglePower.getName:
            return !state
        
        default: 
            return state;
    }
}

export default reducer;