import React from "react";
import '../index.css';
import image1 from '../images/schedule.png'

export default function UpcomingEventCard(props) {
    return (
        <div className="upcoming-event-card card">
            <p className="title-card"> Your upcoming events </p>
            <ul>
                <li> <div className="name-event"> <img src = {image1} /> Job interviev </div> <span className="event-date"> 06.11.2023 </span> </li>
                <li> <div className="name-event"> <img src = {image1} /> Family meeting </div> <span className="event-date"> 15.11.2023 </span> </li>
                <li> <div className="name-event"> <img src = {image1} /> Bob's wedding </div> <span className="event-date"> 25.11.2023 </span> </li>
            </ul>
        </div>
    )
}