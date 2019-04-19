import React from "react";

const logo = props => {
    const styles = {
        link: {
            marginRight: ".5rem"
        },
        image: {
            display: "block",
            height: "100%",
            width: "1.8rem"
        }
    }

    return (
        <a 
        href={props.link} 
        className="btn btn-sm btn-primary" 
        style={styles.link}>
            <img 
            src={props.src} 
            style={styles.image}
            alt={props.alt}/>
        </a>
    )
};

export default logo;