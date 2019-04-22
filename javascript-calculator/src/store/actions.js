import {
    createAction
}
from "../functions/createAction";

const onAddChar = createAction({
    name: "ON_ADD_CHAR",
    payload: [
        "char"
    ]
});

const onAddMath = createAction({
    name: "ON_ADD_MATH"
});

const onSubtractMath = createAction({
    name: "ON_SUBTRACT_MATH"
});

const onMultipleMath = createAction({
    name: "ON_MULTIPLE_MATH"
});

const onDivideMath = createAction({
    name: "ON_DIVIDE_MATH"
});

const onDelete = createAction({
    name: "ON_DELETE"
});

const onEqual = createAction({
    name: "On_EQUAL"
});

export {
    onAddChar,
    onAddMath,
    onSubtractMath,
    onMultipleMath,
    onDivideMath,
    onDelete,
    onEqual
}
