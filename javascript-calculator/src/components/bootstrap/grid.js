import React from "react";

export default props => {
    const styles = {
        display: "grid",
        gridTemplateColumns: `repeat(${props.columns || 3}, 1fr)`,
        gridColumnGap: `${props.gap || "1rem"}`,
        gridRowGap: `${props.gap || "1rem"}`,
    };

    return (
        <div style={styles} className="p-1">
            {props.children}
        </div>
    );
}