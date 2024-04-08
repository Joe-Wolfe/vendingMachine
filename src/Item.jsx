import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";

function Item({ name, image }) {
    return (
        <div>
            <h1>{name}</h1>
            <img src={image} alt={name} />
            <br />
            <Link to="/">Home</Link>
        </div>
    );
}

export default Item