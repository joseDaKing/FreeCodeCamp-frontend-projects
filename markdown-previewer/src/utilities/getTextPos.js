export const textPos = (pos = "") => {
    pos = pos.toLowerCase();

    const cssClasses = {
        center: "text-center",
        left: "text-left",
        right: "text-right"
    };

    const POS = Object.keys(cssClasses);

    switch(pos) {
        case POS[POS.indexOf("center")]:
            return cssClasses.center;
        
        case POS[POS.indexOf("left")]:
            return cssClasses.left;

        case POS[POS.indexOf("right")]:
            return cssClasses.right;
        
        default:
            return cssClasses.center
    }
}