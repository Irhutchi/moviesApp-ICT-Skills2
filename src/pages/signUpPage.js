import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import SignUpForm from "../components/signUpForm";
import LoginForm from "../components/loginForm";


const SignUpPage = () => {
    const [toggleForm, setToggleForm] = useState(true);
    const formMode = () => {
        setToggleForm(!toggleForm);
    }
    return (
        <>
            {toggleForm ? (
                <LoginForm toggle={() => formMode()}/>
                ) : 
                (<SignUpForm toggle={() => formMode()}/>)}
            
        </>
    );
};

export default withRouter(SignUpPage);