import React from "react";
import SignUpForm from "../components/signUpForm";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";



export default {
  title: "Landing Page/SignUpCard",
  component: SignUpForm,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => {
  return (
    <SignUpForm/>
  );
};
Basic.storyName = "Default";
