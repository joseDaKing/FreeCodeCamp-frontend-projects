import {
    setQoutes
} 
from "../actions";

import {
    concatArrays, 
    concatObjects,
    removeDubplicatesInArray,
} 
from "../../utilities";

const initState = {
    qoutes: [],
    qoutesAmount: 0,
};

const reducer = (state = initState, action) => {
    switch(action.type) {
        case setQoutes.getName:
            return concatObjects(state, {
                qoutes: removeDubplicatesInArray(
                    concatArrays(
                        state.qoutes,
                        action.qoutes
                    )
                ),
                qoutesAmount: action.qoutes.length
            })

        default: 
            return state;
    }
};

export default reducer;