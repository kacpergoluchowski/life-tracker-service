import React from "react";
import logo from "../images/analysis.png"
import '../index.css'

export default function Logo() {
    return (
        <div className="logo-wrapper">
            <img src = {logo} alt = 'life-tracker-logo'/>
            <h1> LifeTracker </h1>
        </div>
    )
}