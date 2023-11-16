import React from "react";
import '../index.css';
import image1 from '../images/money.png'

export default function MoneyCard(props) {
    return (
        <div className="money-card card">
            <p className="title-card"> Your money </p>
            <ul>
                <li className="account-balance"> <img src = {image1}/> 9750,23 zł </li>
                <div className="operation-list">
                    <li> <span className="operation-value increase"> +346,51 zł </span> <span className="operation-date"> 20.10.2023 </span></li>
                    <li> <span className="operation-value decrease"> -92,00 zł </span> <span className="operation-date"> 29.09.2023 </span></li>
                    <li> <span className="operation-value increase"> +931,50 zł </span> <span className="operation-date"> 16.09.2023 </span></li>
                </div>
            </ul>
        </div>
    )
}