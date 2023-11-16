import React, { useState } from "react";
import '../index.css';
import GoalsList from "../components/GoalsList";
import GoalCreator from "../components/GoalCreator";

export default function GoalsListManager() {
    const [goalsListVisible, setGoalsListVisible] = useState(true);
    const [addGoalVisible, setAddGoalVisible] = useState(false);

    return (
        <>
            <div className="goals-list__wrapper">
                {goalsListVisible && (
                    <>
                        <h2> Goals list </h2>
                        <GoalsList hideListOfGoals={() => setGoalsListVisible(false)} showGoalCreator={() => setAddGoalVisible(true)} />
                    </>
                )}
                {addGoalVisible && (
                    <>
                        <h2> Adding goal </h2>
                        <GoalCreator addGoalVisibleToFalse={() => setAddGoalVisible(false)} goalsListVisibleToTrue={() => setGoalsListVisible(true)} />
                    </>
                )}
            </div>
        </>
    );
}
