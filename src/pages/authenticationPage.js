import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import SignUpForm from "../components/signUpForm";
import LoginForm from "../components/loginForm";
import SiteHeader from "../components/siteHeader";
import HomePage from "../pages/homePage";

const AuthenticationPage = () => {
    const [user, setUser] = useState('');
    const [toggleForm, setToggleForm] = useState(true);
    const formMode = () => {
        setToggleForm(!toggleForm);
    }

    const userState = () => {
      const data = localStorage.getItem('user');
      const us = data !== null ? JSON.parse(data) : null;
      setUser(us);
    }
    
    useEffect(() => {
      userState();
    }, []);

    return (
        <>
            {user !== null ? (
                <>
                <SiteHeader setUserState={() => setUser(null)} />
                <HomePage />
                </>
            ) : (
                <>
                {toggleForm ? (
                    <LoginForm loggedIn={(user) => setUser(user)} toggle={() => formMode()}/>
                    ) : 
                    (<SignUpForm toggle={() => formMode()}/>)}
                
            </>
            )}
        </>
        
    );
};

export default withRouter(AuthenticationPage);