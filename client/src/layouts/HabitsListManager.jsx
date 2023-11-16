import React, { useState } from "react";
import '../index.css';
import HabitsList from "../components/HabitsList";
import HabitCreator from "../components/HabitCreator";

export default function HabitsListManager() {
    const [habitsListVisible, setHabitsListVisible] = useState(true);
    const [addHabitVisible, setAddHabitVisible] = useState(false);
    
    return (
        <>
            <div className="activity-list__wrapper">
                {habitsListVisible && (
                    <>
                        <h2> Habits list </h2>
                        <HabitsList hideListOfHabits={() => setHabitsListVisible(false)} showHabitCreator={() => setAddHabitVisible(true)} />
                    </>
                )}
                {addHabitVisible && (
                    <>
                        <h2> Adding habit </h2>
                        <HabitCreator addHabitVisibleToFalse={() => setAddHabitVisible(false)} habitsListVisibleToTrue={() => setHabitsListVisible(true)} />
                    </>
                )}
            </div>
        </>
    );
}
