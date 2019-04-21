import {
    setSoundType
}
from "../actions/index";

const initState = "";

const reducer = (state = initState, action) => {
    switch(action.type) {
        case setSoundType.getName:
            return action.soundType
        
        default: 
            return state;
    }
}

export default reducer;