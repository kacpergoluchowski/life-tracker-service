import React, { useRef, useState } from "react";
import Logo from "../components/Logo";
import Announcement from '../layouts/Announcement';
import Loader from "../components/Loader";

const SignIn = () => {
    const nickname = useRef(null);  
    const password = useRef(null);
    const [messageVisibility, setMessageVisibility] = useState(false);
    const [message, setMessage] = useState(undefined); 
    const [loaderVisibility, setLoaderVisibility] = useState(false);

    const showMessage = message => {
        setMessage(message);
        setMessageVisibility(true);
    }

    async function loginUser() {
        setLoaderVisibility(true);
        console.log(process.env.REACT_APP_BACKEND_URL);
        const query = await fetch(`${process.env.REACT_APP_BACKEND_URL}/sign-in`, {
            method: "POST",
            body: JSON.stringify({ nickname: nickname.current.value, password: password.current.value }),
            headers: {
                "Content-type": "application/json"
            }
        });

        if (query.ok) {
            const loginCondition = await query.json();

            if (loginCondition[0] && loginCondition[1]) {
                localStorage.setItem('user-nickname', nickname.current.value);
                window.location.href = '/home';
            }
            else if (!loginCondition[0]) 
                showMessage('THE GIVEN USER DOES NOT EXIST!')
            else if (!loginCondition[1]) 
                showMessage('THE PASSWORD YOU PROVIDE IS WRONG!')
        }
        setLoaderVisibility(false);
    }

    return (
        <div className="login-page__wrapper">
            <Logo />
            <input placeholder="Your nickname" className="login-page__input" ref={nickname} />
            <input placeholder="Your password" type="password" className="login-page__input" ref={password} />
            <button className="light-button" onClick={loginUser}> SIGN IN </button>
            {messageVisibility && (
                <Announcement message={message} hideMessage={() => setMessageVisibility(false)} loginSuccess={false} />
            )}
            {loaderVisibility && (
                <Loader />
            )}
        </div>
    );
}

export default SignIn;