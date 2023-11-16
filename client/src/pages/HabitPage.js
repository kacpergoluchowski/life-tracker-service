import React, { useState, useEffect } from "react";
import "../index.css";
import Navbar from "../layouts/Navbar";
import HabitsListManager from "../layouts/HabitsListManager";
import UserHabitsManager from "../layouts/UserHabitsManager";
import Switch from "../components/Swtich";

const HabitPage = () => {
  const [mobileSwitchVisible, setMobileSwitchVisible] = useState(false);
  const [habitsListVisible, setHabitsListVisible] = useState(true);
  const [userHabitsVisible, setUserHabitsVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 450) {
        setMobileSwitchVisible(true);
      } else {
        setMobileSwitchVisible(false);
      }
    };

    handleResize();
    
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="page__wrapper">
      <Navbar />
      {mobileSwitchVisible && (
        <Switch
          hideActivitiesList={() => setHabitsListVisible(false)}
          showUserActivities={() => setUserHabitsVisible(true)}
          showActivitiesList={() => setHabitsListVisible(true)}
          hideUserActivities={() => setUserHabitsVisible(false)}
        />
      )}

      <section className="page__cards-wrapper">
        {habitsListVisible && <HabitsListManager />}
        {userHabitsVisible && <UserHabitsManager />}
      </section>
    </div>
  );
};

export default HabitPage;
