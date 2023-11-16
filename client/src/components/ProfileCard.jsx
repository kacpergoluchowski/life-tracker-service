import React from "react";
import '../index.css';
import ProfileImage from '../images/man (9).png'

export default function ProfileCard(props) {
    return (
        <div className="profile-card card">
            <img src = {ProfileImage} />
            <p> Hello, {localStorage.getItem('user-nickname')}! </p>
            <span className="logout-button"> [ Logout ] </span>
        </div>
    )
}