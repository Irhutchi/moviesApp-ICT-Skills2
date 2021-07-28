import React from "react";
import { withRouter } from "react-router-dom";
import SignUpForm from "../components/signUpForm";


const SignUpPage = () => {
    return (
        <>
            <SignUpForm />
        </>
    );
};

export default withRouter(SignUpPage);