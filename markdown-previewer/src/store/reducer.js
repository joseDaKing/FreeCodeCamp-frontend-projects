import {
    onChange
}
from "./action";

import {
    concatObjects
}
from "../utilities";

const initState = {
    markDownText: "",
}

const reducer = (state = initState, action) => {
    switch(action.type) {
        case onChange.getName: 
            return concatObjects(state, {
                markDownText: action.markDownText,
            });
            
        default: 
            return state;
    }
}

export default reducer;