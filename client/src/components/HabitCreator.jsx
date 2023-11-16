import React, { useRef } from "react";
import '../index.css';
import addActivityToDb from '../utilities/addActivityToDb';

export default function HabitCreator(props) {
    const frequencyRef = useRef(0);
    const unitRef = useRef(0);
    const timeForRealizationRef = useRef('per day');

    const habitName = localStorage.getItem('activity-name');
    const habitIcon = localStorage.getItem('activity-icon');

    const handleAddHabit = () => {
        props.addHabitVisibleToFalse();
        props.habitsListVisibleToTrue();
        const data = ['Habit', frequencyRef.current.value, unitRef.current.value, timeForRealizationRef.current.value];
        addActivityToDb(data);
        window.location.reload(false);
    };

    return (
        <div className="add-activity__wrapper">
            <section className="add-activity__activity-desc">
                <img src={habitIcon} alt={habitName} />
                <h1> {habitName} </h1>
            </section>
            <ul>
                <li> <p> Frequency: </p> <input type='number' ref={frequencyRef} /> </li>
                <li> <p> Unit: </p> <input type='text' ref={unitRef} /> </li>
                <li>
                    <p> Time for realization: </p>
                    <select name='time' ref={timeForRealizationRef}>
                        <option value='per day'> Per day </option>
                        <option value='per week'> Per week </option>
                        <option value='per month'> Per month </option>
                    </select>
                </li>
            </ul>
            <button className="add-activity-btn" onClick={handleAddHabit}> Add habit </button>
        </div>
    );
}
