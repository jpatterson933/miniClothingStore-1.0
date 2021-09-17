import React from "react";

// Styles Sheets
import './index.css';

export const DetailsCard = (props) => {
    return (
        <div className="card">
            <ul>
                <li>Type: {props.clothingtype}</li>
                <li>Color: {props.color}</li>
                <li>Size: {props.size}</li>
                <li>UPC: {props.upc}</li>
            </ul>
        </div>
    )
}