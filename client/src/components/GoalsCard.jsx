import React, { useContext } from "react";
import '../index.css';
import { useState, useEffect } from "react";
import ActivityContext from "../contexts/ActivityData";
import fillHabitsArray from "../utilities/fillActivitiesArray";
import { findAmountOfHabits } from "../utilities/findAmountOfActivities";

export default function HabitsCard() {
  const activitiesData = useContext(ActivityContext)
  const goalsArray = fillHabitsArray('goal', activitiesData);
  const goalsAmount = findAmountOfHabits('goal', activitiesData);

    return (
      <div className="goals-card card">
      <p className="title-card"> Your goals </p>
      <ul>
        { goalsArray && (
        goalsArray.map(goal => {
          return <li key = {goal._id}>
                  <span className="activity-desc"> <img src = {goal.activityIcon} /> {goal.activityName} </span>
                  { goal.activityProgress < goal.activityFrequency && (
                    <span className="activity-progress"> {goal.activityProgress}  /  {goal.activityFrequency} {goal.activityUnit} </span>
                  )}
                  { goal.activityProgress >= goal.activityFrequency && (
                    <span className="done-message"> Done! </span>
                  )}

                </li>
        })
      )}
      { goalsAmount > 2 && (
        <li> + {goalsAmount - 2} more goals </li>
      )}
      </ul> 
      { goalsArray.length == 0 && (
        <h1> NO GOALS... </h1>
      )}
    </div>
    )
}