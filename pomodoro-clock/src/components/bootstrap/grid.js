import React from "react";

export default props => {
    const styles = {
        display: "grid",
        gridTemplateColumns: `repeat(${props.size || 1}, 1fr)`,
        gridGap: `${props.gapY || "1em"} ${props.gapX || "1em"}`
    };

    return (
        <div style={styles}>
            {props.children}
        </div>
    )
}