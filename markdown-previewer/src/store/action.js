import {
    createAction
} 
from "../functions/createAction";

export const onChange = createAction({
    name: "ON_CHANGE",
    payload: [
        "markDownText"
    ]
});