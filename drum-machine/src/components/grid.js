import React from "react";

export default props => {
    const styles = {
        display: "grid",
        gridTemplateColumns: `repeat(${props.columns || 3}, 1fr)`,
        gridColumnGap: `${props.columnGap || "1.5rem"}`,
        gridRowGap: `${props.rowGap || "1rem"}`,
    };

    return (
        <div style={styles} className="p-1">
            {props.children}
        </div>
    );
};