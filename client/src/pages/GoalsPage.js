import React from "react";
import Navbar from "../layouts/Navbar";
import GoalsListManager from "../layouts/GoalsListManager";
import UserGoalsManager from "../layouts/UserGoalsManager";

const GoalsPage = () => {
    return (
        <div className="page__wrapper">
            <Navbar />
            <section className="page__cards-wrapper">
                <GoalsListManager />
                <UserGoalsManager />
            </section>
        </div>
    )
}

export default GoalsPage;