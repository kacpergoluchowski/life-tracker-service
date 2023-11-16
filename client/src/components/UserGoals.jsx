import React, { useEffect, useState } from "react";
import '../index.css';
import addActivityToLocalStorage from "../utilities/addActivityToLocalStorage";

export default function UserGoals(props) {
    const [goalsData, setGoalsData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const nickname = localStorage.getItem('user-nickname');

            try {
                const query = await fetch(`${process.env.REACT_APP_BACKEND_URL}/getActivities`, {
                    method: 'POST',
                    body: JSON.stringify({ nickname }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                if (query.ok) {
                    const response = await query.json();
                    setGoalsData(response);
                } else {
                    console.error('Błąd podczas żądania HTTP:', query.status);
                }
            } catch (error) {
                console.error('Błąd podczas żądania HTTP:', error);
            }
        };

        fetchData();
    }, []);

    const renderGoals = () => {
        if (!goalsData) {
            return <h1>LOADING...</h1>;
        }

        return (
            <ul>
                {goalsData.map(goal => (
                    goal.activityType === 'goal' && (
                        <li className="activity-wrapper" key={goal._id}>
                            <span className="activity-desc">
                                <img src={goal.activityIcon} alt={goal.activityName} /> {goal.activityName}
                            </span>
                            <span className="activity-update">
                                <button className="update-habit-btn" onClick={() => {
                                    props.hideUserHabitsList();
                                    props.showChangeHabit();
                                    addActivityToLocalStorage(goal);
                                }}>
                                    Complete goal
                                </button>
                            </span>
                        </li>
                    )
                ))}
            </ul>
        );
    };

    return (
        <>
            {renderGoals()}
        </>
    );
}