import {
    toggleBank
}
from "../actions/index";

const initState = false;

const reducer = (state = initState, action) => {
    switch(action.type) {
        case toggleBank.getName:
            return !state
        
        default: 
            return state;
    }
}

export default reducer;