import React from "react";
import '../index.css';
import image1 from '../images/Vector.png'


export default function StatsCard(props) {
    return (
        <div className="stats-card card">
            <p className="title-card"> Your stats </p>
            <img src = {image1} />
            <div className="months-list">
                <p> July </p>
                <p> August </p>
                <p> September </p>
                <p> October </p>
            </div>
        </div>
    )
}