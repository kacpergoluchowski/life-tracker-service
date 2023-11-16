function passwordsValid(password_first, password_again) {
    if(password_again=="" || password_first=="")
        return false;
    else if(password_first==password_again)
        return true;
    return false;
}

export default passwordsValid;