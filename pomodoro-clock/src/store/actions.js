import {
    createAction 
}
from "./createAction";

const onUppdateTime = createAction({
    name: "ON_UPPDATE_Time",
    payload: [
        "seconds"
    ]
});

const onSetIndicator = createAction({
    name: "ON_SET_INDICATOR",
    payload: [
        "indicator"
    ]
});

const onSetIsSession = createAction({
    name: "ON_SET_IS_SESSION",
    payload: [
        "bool"
    ]
});

const onReset = createAction({
    name: "ON_RESET"
});

export {
    onUppdateTime,
    onSetIndicator,
    onSetIsSession,
    onReset
}