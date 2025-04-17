import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { About, Contact, Courses, Home, Mentors } from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "courses",
        element: <Courses />,
      },
      {
        path: "courses/:id",
        element: <>Courses id1</>,
      },
      {
        path: "mentors",
        element: <Mentors />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);
