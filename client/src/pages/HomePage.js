import React, { useEffect, useState } from "react";
import '../index.css';
import Navbar from "../layouts/Navbar";
import ProfileCard from "../components/ProfileCard";
import HabitsCard from "../components/HabitsCard";
import GoalsCard from "../components/GoalsCard";
import StatsCard from "../components/StatsCard";
import UpcomingEventCard from "../components/UpcomingEventCard";
import MoneyCard from "../components/MoneyCard";
import { Link } from "react-router-dom";
import ActivityContext from "../contexts/ActivityData";
import Loader from "../components/Loader";

const HomePage = () => {
    const [activitiesData, setActivitiesData] = useState(null);
    useEffect(() => {
        async function getActivitiesData() {
            const query = await fetch(`${process.env.REACT_APP_BACKEND_URL}/getActivities`, {
                method: "POST",
                body: JSON.stringify({ nickname: localStorage.getItem('user-nickname') }),
                headers: {
                    "Content-type":"application/json"
                }
            })

            if(query.ok) {
                const result = await query.json();
                setActivitiesData(result);
            }
        } 

        getActivitiesData();
    })

    return (
        <div>
        { activitiesData && (
            <ActivityContext.Provider value={activitiesData}>
                <div className="home-page__wrapper">
                    <Navbar />
                    <section className="home-page__cards">
                        <ProfileCard />
                        <Link to="/habits">
                            <HabitsCard />
                        </Link>
                        <Link to="/goals">
                            <GoalsCard />
                        </Link>
                        <StatsCard />
                        <MoneyCard />
                        <UpcomingEventCard />
                    </section>
                </div>
            </ActivityContext.Provider>
        )}
        { !activitiesData && (
            <Loader/>
        )

        }
        </div>
    );
};

export default HomePage;
