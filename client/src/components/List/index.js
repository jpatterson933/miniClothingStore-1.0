import React from "react";
import './index.css';

export const ListItem = (props) => {
    return (
            <li className={props.liclass} {...props}></li>
    )
}