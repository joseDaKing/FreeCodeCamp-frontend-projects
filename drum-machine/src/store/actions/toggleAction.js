import {
    createAction 
}
from "../../functions/createAction";

const togglePower = createAction({
    name: "TOGGLE_POWER",
});

const toggleBank = createAction({
    name: "TOGGLE_BANK",
});

export {
    toggleBank,
    togglePower
};