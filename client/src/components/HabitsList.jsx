import React from "react";
import '../index.css';
import get_up from '../images/get-up.png'
import train_everyday from '../images/treadmill.png'
import healtht_diet from '../images/diet.png'
import drinking_water from '../images/drink-water.png'
import daily_meditation from '../images/meditation.png'
import reading_book from '../images/book.png';
import saving_money from '../images/salary.png';
import programming from '../images/programming.png'
import addActivityToLocalStorage from "../utilities/addActivityToLocalStorage";

export default function HabitsList(props) {

    const habits = [{
        id: 1,
        activityName: 'Get up in the morning',
        activityIcon: get_up 
    }, 
    {
        id: 2,
        activityName: 'Train every day',
        activityIcon: train_everyday
    }, 
    {
        id: 3,
        activityName: 'Healthy diet',
        activityIcon: healtht_diet
    }, 
    {
        id: 4,
        activityName: 'Drinking water',
        activityIcon: drinking_water
    }, 
    {
        id: 5,
        activityName: "Daily meditation",
        activityIcon: daily_meditation,
    }, 
    {
        id: 6,
        activityName: "Reading book",
        activityIcon: reading_book, 
    },
    {
        id: 7,
        activityName: "Saving money",
        activityIcon: saving_money
    }, 
    {
        id: 8,
        activityName: "Programming",
        activityIcon: programming
    }]

    return (
        <ul>
            { habits.map(habit => {
                return (
                    <li key = {habit.id} className="activity-wrapper"> 
                        <span className="activity-desc"> <img src = {habit.activityIcon}/> {habit.activityName} </span> 
                        <span> 
                            <button className="add-activity-btn" onClick={() => {props.hideListOfHabits(); props.showHabitCreator(); addActivityToLocalStorage(habit)}}> Add habit </button>
                        </span> 
                    </li>
            )})}
        </ul>
    )
}