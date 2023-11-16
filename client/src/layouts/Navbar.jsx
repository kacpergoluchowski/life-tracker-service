import React from "react";
import '../index.css';
import Logo from "../components/Logo";

export default function Navbar() {
    return (
        <nav>
            <Logo/>
            <ul>
                <li> HOME </li>
                <li> ACCOUNT </li>
            </ul>
        </nav>
    )
}