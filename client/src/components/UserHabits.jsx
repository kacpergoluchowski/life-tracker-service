import React, { useEffect, useState } from "react";
import '../index.css';
import addActivityToLocalStorage from "../utilities/addActivityToLocalStorage";
import Loader from '../components/Loader';

export default function UserHabits(props) {
    const [habitsData, setHabitsData] = useState(null);

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
                    setHabitsData(response);
                } else {
                    console.error('Błąd podczas żądania HTTP:', query.status);
                }
            } catch (error) {
                console.error('Błąd podczas żądania HTTP:', error);
            }
        };

        fetchData();
    }, []);

    const renderHabits = () => {
        if (!habitsData) {
            return <Loader/>;
        }

        return (
            <ul>
                {habitsData.map(habit => (
                    habit.activityType === 'habit' && (
                        <li className="activity-wrapper" key={habit._id}>
                            <span className="activity-desc">
                                <img src={habit.activityIcon} alt={habit.activityName} /> {habit.activityName}
                            </span>
                            <span className="activity-update">
                                <button className="update-activity-btn" onClick={() => {
                                    props.hideUserHabitsList();
                                    props.showChangeHabit();
                                    addActivityToLocalStorage(habit);
                                }}>
                                    Update habit
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
            {renderHabits()}
        </>
    );
}