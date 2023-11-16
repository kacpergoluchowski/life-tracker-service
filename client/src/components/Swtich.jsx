import React from "react";
import '../index.css';

export default function Switch(props) {
    const handleActivitiesList = () => {
        props.hideUserActivities();
        props.showActivitiesList();
    }

    const handleUserActivitiesList = () => {
        props.hideActivitiesList();
        props.showUserActivities();
    }
    return (
        <div className="switch__wrapper">
            <button onClick={handleActivitiesList}> Habits list </button>
            <button onClick={handleUserActivitiesList}> Your habits </button>
        </div>
    )
}