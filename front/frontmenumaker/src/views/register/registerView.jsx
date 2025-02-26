import React, { useState } from "react";
import { registerUser } from "../../api";
import "./registerView.scss";

function RegisterView() {
    const [mail, setMail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="register__container">
            <h1 className="register__header">Register page</h1>
            <form className="register__form">
                <label className="register__label">
                    mail
                    <input
                        type="mail"
                        value={mail}
                        onChange={() => setMail(event.target.value)}
                    />
                </label>
                <label className="register__label">
                    Name
                    <input
                        type="text"
                        value={name}
                        onChange={() => setName(event.target.value)}
                    />
                </label>
                <label className="register__label">
                    Password
                    <input
                        type="password"
                        value={password}
                        onChange={() => setPassword(event.target.value)}
                    />
                </label>

                <input
                    className="register__submit"
                    type="submit"
                    value="register"
                    onClick={() => registerUser(mail, name, password)}
                />
            </form>
        </div>
    );
}

export default RegisterView;
