import React from "react";

const qoute = props => (
    <blockquote className="blockquote text-center">
        <p className="mb-0"> {props.text} </p>

        <footer className="blockquote-footer text-right">
            {props.children}
            <cite title="Source Title" style={{marginLeft: "5px"}}>
                {props.source}
            </cite>
        </footer>
    </blockquote>
);

export default qoute;