import React from "react";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";

const LoginPage = () => {
    return (
        <div className="login-page__wrapper">
            <Logo />
            <span> Track your goals. Make your dreams come true. </span>
            <Link to="/sign-in">
                <button className="light-button">SIGN IN</button>
            </Link>
            <Link to="/sign-up">
                <button className="dark-button">SIGN UP</button>
            </Link>
        </div>
    );
};

export default LoginPage;
