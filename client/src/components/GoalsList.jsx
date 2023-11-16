import React from "react";
import '../index.css';
import license from '../images/license.png'
import promotion from '../images/promotion.png'
import languages from '../images/languages.png'
import book from '../images/read-a-book.png';
import new_country from '../images/new-zealand.png';
import new_company from '../images/company.png';
import communication from '../images/conversation.png';
import art from '../images/art.png'
import addActivityToLocalStorage from "../utilities/addActivityToLocalStorage";

export default function GoalsList(props) {

    const goals = [{
        id: 1,
        activityName: 'Getting a driving license',
        activityIcon: license 
    }, 
    {
        id: 2,
        activityName: 'Promotion at work',
        activityIcon: promotion
    }, 
    {
        id: 3,
        activityName: 'Learning a new language',
        activityIcon: languages
    }, 
    {
        id: 4,
        activityName: 'Writing a book',
        activityIcon: book
    }, 
    {
        id: 5,
        activityName: "Visiting a new country",
        activityIcon: new_country,
    }, 
    {
        id: 6,
        activityName: "Opening a new company",
        activityIcon: new_company, 
    },
    {
        id: 7,
        activityName: "Developing communication skills",
        activityIcon: communication
    }, 
    {
        id: 8,
        activityName: "Developing artistic skills",
        activityIcon: art
    }]

    return (
        <ul>
            { goals.map(goal => {
                return (
                    <li key = {goal.id} className="activity-wrapper"> 
                        <span className="activity-desc"> <img src = {goal.activityIcon}/> {goal.activityName} </span> 
                        <span> 
                            <button className="add-activity-btn" onClick={() => {props.hideListOfGoals(); props.showGoalCreator(); addActivityToLocalStorage(goal)}}> Add goal </button>
                        </span> 
                    </li>
            )})}
        </ul>
    )
}