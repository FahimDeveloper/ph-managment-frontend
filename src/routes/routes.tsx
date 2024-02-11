import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/authentication/Login/Login";
import Register from "../pages/authentication/Register/Register";
import { adminPaths } from "./admin.routes";
import { routesGenerator } from "../utils/routesGenerator";
import { facultyPaths } from "./faculty.routes";
import { studentPaths } from "./student.routes";

const router = createBrowserRouter([
  {
    path: "/admin",
    element: <App />,
    children: routesGenerator(adminPaths),
  },
  {
    path: "/faculty",
    element: <App />,
    children: routesGenerator(facultyPaths),
  },
  {
    path: "/student",
    element: <App />,
    children: routesGenerator(studentPaths),
  },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
]);

export default router;
