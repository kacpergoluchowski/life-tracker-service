import React, { useRef } from "react";
import '../index.css';
import editHabit from "../utilities/editHabit";

export default function HabitEditor() {
    const newProgressRef = useRef(0);

    const habitName = localStorage.getItem('activity-name');
    const habitIcon = localStorage.getItem('activity-icon');
    const habitFrequency = localStorage.getItem('activity-frequency');
    const habitTimeForRealization = localStorage.getItem('activity-timeForRealization');
    const habitUnit = localStorage.getItem('activity-unit');
    const habitProgress = localStorage.getItem('activity-progress');

    const handleSaveChanges = () => {
        editHabit(newProgressRef);
    };

    return (
        <div className="activity-editor__wrapper">
            <section className="add-activity__activity-desc">
                <img src={habitIcon} alt={habitName}/>
                <h1> {habitName} </h1>
            </section>
            <ul>
                <li>
                    <p> Progress: </p>
                    <input type='number' ref={newProgressRef} placeholder={habitProgress}/>
                    / {habitFrequency} {habitUnit} {habitTimeForRealization}
                </li>
            </ul>
            <button className="update-activity-btn" onClick={handleSaveChanges}> Save changes </button>
        </div>
    );
}
