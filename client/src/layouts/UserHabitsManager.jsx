import React, { useState } from "react";
import '../index.css'
import UserHabits from "../components/UserHabits";
import HabitEditor from "../components/HabitEditor";

export default function UserHabitsManager() {
    const [userHabitsVisible, setUserHabitsVisible] = useState(true);
    const [changeUserHabitVisible, setChangeUserHabitsVisible] = useState(false);

    const showChangeHabit = () => {
        setUserHabitsVisible(false);
        setChangeUserHabitsVisible(true);
    };

    const hideUserHabitsList = () => {
        setUserHabitsVisible(true);
        setChangeUserHabitsVisible(false);
    };

    return (
        <div className="user-activities-list__wrapper">
            {userHabitsVisible && (
                <div>
                    <h2> Your habits </h2>
                    <UserHabits hideUserHabitsList={hideUserHabitsList} showChangeHabit={showChangeHabit} />
                </div>
            )}
            {changeUserHabitVisible && (
                <div>
                    <h2>Edit habit</h2>
                    <HabitEditor />
                </div>
            )}
        </div>
    );
}
