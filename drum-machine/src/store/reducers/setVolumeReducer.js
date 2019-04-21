import {
    setVolume
}
from "../actions/index";

const initState = 50;

const reducer = (state = initState, action) => {
    switch(action.type) {
        case setVolume.getName:
            return action.volume
        
        default: 
            return state;
    }
}

export default reducer;