import {
    createAction 
}
from "../../functions/createAction";

const setVolume = createAction({
    name: "SET_VOLUME",
    payload: [
        "volume" 
    ]
});

const setSoundType = createAction({
    name: "SET_SOUND_TYPE",
    payload: [
        "soundType"
    ]
});

export {
    setVolume,
    setSoundType
}