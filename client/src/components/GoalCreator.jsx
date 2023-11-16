import React, { useRef } from "react";
import '../index.css';
import addHabitToDb from '../utilities/addActivityToDb';

export default function GoalCreator(props) {
    const dateRef = useRef(0);

    const habitName = localStorage.getItem('activity-name');
    const habitIcon = localStorage.getItem('activity-icon');

    const handleAddHabit = () => {
        props.addGoalVisibleToFalse();
        props.goalsListVisibleToTrue();
        const data = ['Goal', dateRef.current.value];
        addHabitToDb(data);
    };

    return (
        <div className="add-activity__wrapper">
            <section className="add-activity__activity-desc">
                <img src={habitIcon} alt={habitName} />
                <h1> {habitName} </h1>
            </section>
            <ul>
                <li> <p> Target deadline: </p> <input type='date' ref={dateRef} /> </li>
            </ul>
            <button className="add-activity-btn" onClick={handleAddHabit}> Add goal </button>
        </div>
    );
}
