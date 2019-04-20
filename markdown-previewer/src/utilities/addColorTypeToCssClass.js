import {
    getColorType
}
from "./getColorType";

export const addColorTypeToCssClass = ({props, type, classes}) => {
    const color = getColorType(props, type);

    if (color) {
        classes.addClass(color);
    }   
}