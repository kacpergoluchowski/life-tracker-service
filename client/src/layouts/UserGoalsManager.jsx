import React, { useState } from "react";
import '../index.css'
import HabitEditor from "../components/HabitEditor";
import UserGoals from "../components/UserGoals";

export default function UserGoalsManager() {
    const [userGoalsVisible, setUserGoalsVisible] = useState(true);
    const [changeUserGoalsVisible, setChangeUserGoalsVisible] = useState(false);

    const showChangeGoal = () => {
        setUserGoalsVisible(false);
        setChangeUserGoalsVisible(true);
    };

    const hideUserGoalsList = () => {
        setUserGoalsVisible(true);
        setChangeUserGoalsVisible(false);
    };

    return (
        <div className="user-activities-list__wrapper">
            { userGoalsVisible && (
                <div>
                    <h2>Your goals list</h2>
                    <UserGoals hideUserGoalsList={hideUserGoalsList} showChangeGoal={showChangeGoal} />
                </div>
            )}
            { changeUserGoalsVisible && (
                <div>
                    <h2>Edit habit</h2>
                    <HabitEditor />
                </div>
            )}
        </div>
    );
}
