import React from "react";
import LoginForm from "../components/loginForm";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";


export default {
  title: "Authentication/LoginCard",
  component: LoginForm,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => {
  return (
    <LoginForm/>
  );
};
Basic.storyName = "Default";
