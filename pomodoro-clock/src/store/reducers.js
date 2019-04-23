import {
    onUppdateTime,
    onSetIndicator,
    onSetIsSession,
    onReset
}
from "./actions";

import {
    secondsToTimeString,
    concatObjects,
    copyObject
}
from "../utilities"

const initState = {
    currentTime: "00:00",
    indicator: "session",
    isSession: true,
    sessionTime: 0,
    breakTime: 0
};

const reducer = (state = initState, action) => {
    switch(action.type) {
        case onUppdateTime.getName: 
            return concatObjects(state, {
                currentTime: secondsToTimeString(action.seconds - 1)
            });

        case onSetIndicator.getName:
            return concatObjects(state, {
                indicator: action.indicator,
            });

        case onSetIsSession.getName:
            return concatObjects(state, {
                isSession: action.bool
            });

        case onReset.getName:
            return copyObject(initState);

        default:
            return state;
    }
};

export default reducer;