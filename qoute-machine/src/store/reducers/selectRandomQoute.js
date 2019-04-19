import {
    selectRandomQoute
} 
from "../actions";

import {
    concatObjects,
    copyArray,
    randomNumber
} 
from "../../utilities";

const initState = {
    currentQoute: 0 
};

const reducer = (state = initState, action) => {
    switch(action.type) {
        case selectRandomQoute.getName:
            return concatObjects(state, {
                currentQoute: copyArray(action.qoutes)[
                    randomNumber({
                        min: 0,
                        max: action.qoutesAmount - 1
                    })
                ]
            })

        default: 
            return state;
    }
};

export default reducer;