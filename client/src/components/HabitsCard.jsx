import React, { useContext } from "react";
import '../index.css';
import { useState, useEffect } from "react";
import ActivityContext from "../contexts/ActivityData";
import Loader from "./Loader";
import fillHabitsArray from "../utilities/fillActivitiesArray";
import { findAmountOfHabits } from "../utilities/findAmountOfActivities";

export default function HabitsCard() {
    const activitiesData = useContext(ActivityContext)
    const habitsArray = fillHabitsArray('habit', activitiesData);
    const habitAmount = findAmountOfHabits('habit', activitiesData);

    return (
        <div className="habits-card card">
          <p className="title-card"> Your habits </p>
          <ul>
            { habitsArray && (
            habitsArray.map(habit => {
              return <li key = {habit._id}>
                      <span className="activity-desc"> <img src = {habit.activityIcon} /> {habit.activityName} </span>
                      { habit.activityProgress < habit.activityFrequency && (
                        <span className="activity-progress"> {habit.activityProgress}  /  {habit.activityFrequency} {habit.activityUnit} </span>
                      )}
                      { habit.activityProgress >= habit.activityFrequency && (
                        <span className="done-message"> Done! </span>
                      )}

                    </li>
            })
          )}
          { habitAmount > 2 && (
            <li> + {habitAmount - 2} more habits </li>
          )}
          </ul> 
          { habitsArray.length == 0 && (
            <h1> NO HABITS... </h1>
          )}
        </div>
    )
}