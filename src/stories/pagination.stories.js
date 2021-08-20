import React from "react";
import PaginationFilter from "../components/pagination"
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";


export default {
  title: "Home Page/Pagination",
  component: PaginationFilter,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => {
  return (
    <PaginationFilter/>
  );
};
Basic.storyName = "Default";
