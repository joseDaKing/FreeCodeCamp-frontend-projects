import  {
    bootstrapColors
} 
from "./bootstrapColor";

export const getColorType =  (props, type) => {
    const copiedProps = {...props};
    delete copiedProps.children;

    type = type.toLowerCase();
    
    return Object.keys(copiedProps).find( prop => {
        for (const color in bootstrapColors) {
            const colorType = `${type}-${color}`;

            if (prop === colorType) {
                return prop;
            }
        }

        return prop;
    })
}