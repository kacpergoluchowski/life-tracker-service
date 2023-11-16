import React, { useRef, useState } from "react";
import Logo from "../components/Logo";
import Announcement from "../layouts/Announcement";
import Loader from "../components/Loader";
import emailValid from '../utilities/emailValid';
import passwordsValid from '../utilities/passwordsValid';

const SignUp = () => {
    const email = useRef(null);
    const nickname = useRef(null);
    const password = useRef(null);
    const passwordAgain = useRef(null);

    const [messageVisibility, setMessageVisibility] = useState(false);
    const [message, setMessage] = useState(undefined);
    const [loaderVisibility, setLoaderVisibility] = useState(false);
    const [loginSuccess, setLoginSuccess] = useState(false);

    async function sendDataToBackend() {
        setLoaderVisibility(true);

        if (emailValid(email.current.value) && passwordsValid(password.current.value, passwordAgain.current.value) && nickname.current.value !== "") {
            const query = await fetch(`${process.env.REACT_APP_BACKEND_URL}/sign-up`, {
                method: "POST",
                body: JSON.stringify({
                    email: email.current.value,
                    nickname: nickname.current.value,
                    password: password.current.value,
                    passwordAgain: passwordAgain.current.value
                }),
                headers: {
                    "Content-type": "application/json",
                }
            });

            if (query.ok) {
                const registrationSuccessful = await query.json();
                if (registrationSuccessful) {
                    setMessage('THANK YOU FOR SUBMITTING ACCOUNT ON OUR PLATFORM!');
                    setMessageVisibility(true);
                    setLoginSuccess(true);
                } else {
                    setMessage("THIS USER ALREADY EXISTS!");
                    setMessageVisibility(true);
                    setLoginSuccess(false);
                }
            }
        } else {
            if (!emailValid(email.current.value)) {
                setMessage('THE EMAIL PROVIDED IS INCORRECT');
            } else if (nickname.current.value === "") {
                setMessage('NO NICKNAME IS PROVIDED');
            } else if (!passwordsValid(password.current.value, passwordAgain.current.value)) {
                setMessage('THESE PASSWORDS ARE NOT THE SAME');
            }
            setMessageVisibility(true);
            setLoginSuccess(false);
        }

        setLoaderVisibility(false);
    }

    return (
        <div className="login-page__wrapper">
            <Logo />
            <input placeholder="Your email" type="email" className="login-page__input" ref={email} />
            <input placeholder="Your nickname" className="login-page__input" ref={nickname} maxLength={15} />
            <input placeholder="Your password" type="password" className="login-page__input" ref={password} />
            <input placeholder="Password again" type="password" className="login-page__input" ref={passwordAgain} />
            <button className="dark-button" onClick={sendDataToBackend}> SIGN UP </button>
            {messageVisibility && (
            <Announcement message={message} hideMessage={() => setMessageVisibility(false)} loginSuccess={loginSuccess} />
            )}
            {loaderVisibility && (
                <Loader />
            )}
        </div>
    );
}

export default SignUp;
