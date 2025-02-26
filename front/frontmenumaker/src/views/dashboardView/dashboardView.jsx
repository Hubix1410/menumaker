import React from "react";
import { useDispatch, useSelector } from "react-redux"; // Import Redux hook
import { logout } from "../../features/user/userSlice"; // Import akcji Redux
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import "./dashboardView.scss";
import { LinkMenu } from "../../components";

function DashboardView() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());

        localStorage.removeItem("token");

        navigate("/login");
    };

    const userData = useSelector((state) => state.user.user);

    return (
        <div className="dashboard__container">
            <h1 className="dashboard__header">Dashboard View</h1>
            <h2>User data:</h2>
            <ul>
                <li>Name: {userData.name}</li>
                <li>email: {userData.email}</li>
                <li>id: {userData.id}</li>
            </ul>
            <h2></h2>
            <button onClick={handleLogout} className="dashboard__logout">
                Logout
            </button>
            <LinkMenu />
        </div>
    );
}

export default DashboardView;
