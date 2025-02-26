import React from "react";
import "./mainView.scss";
import { LinkMenu } from "../../components";

function MainView() {
    return (
        <div className="main__container">
            <h1 className="main__header">Main View</h1>
            <LinkMenu />
        </div>
    );
}

export default MainView;
