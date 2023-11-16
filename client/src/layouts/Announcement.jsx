import React from "react";

export default function Announcement(props) {
    let messageClass;
    if(!props.loginSuccess)
        messageClass = 'login-page__error-message'
    else
        messageClass = 'login-page__success-message'
    
    return (
        <div className={messageClass}>
            <h1> {props.message} </h1>
            <div>
                <button onClick={props.hideMessage}> CLOSE </button>
            </div>
        </div>
    )
}