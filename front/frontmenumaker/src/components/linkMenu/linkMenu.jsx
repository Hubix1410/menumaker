import React from "react";
import { Link } from "react-router";
import "./linkMenu.scss";

function LinkMenu() {
    return (
        <div className="linkMenu__container">
            <Link to="/">Main</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Rgister</Link>
            <Link to="/dashboard">Dashboard</Link>
        </div>
    );
}

export default LinkMenu;
