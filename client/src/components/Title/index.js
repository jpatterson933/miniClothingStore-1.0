import React from "react";
// Styles Sheet
import './index.css';

export const Title = (props) => {
    return (
        <h1 className="title">{props.title}</h1>
    )
}

export const DetailsTitle = (props) => {
    return (
        <p className="details-title">{props.title}</p>
    )
}