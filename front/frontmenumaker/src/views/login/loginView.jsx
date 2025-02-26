import React, { useState } from "react";
import { loginUser } from "../../api";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import "./loginView.scss";
import { LinkMenu } from "../../components";

function LoginView() {
    const [mail, setMail] = useState();
    const [password, setPassword] = useState();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div className="login__container">
            <h1 className="login__header">Login page</h1>
            <form className="login__form">
                <label className="login__label">
                    Email
                    <input
                        type="mail"
                        vlaue={mail}
                        onChange={() => setMail(event.target.value)}
                    />
                </label>
                <label className="login__label">
                    Password
                    <input
                        type="password"
                        vlaue={password}
                        onChange={() => setPassword(event.target.value)}
                    />
                </label>
                <input
                    className="login__submit"
                    type="submit"
                    value="login"
                    onClick={() =>
                        loginUser(mail, password, dispatch, navigate)
                    }
                />
            </form>
            <LinkMenu />
        </div>
    );
}

export default LoginView;
