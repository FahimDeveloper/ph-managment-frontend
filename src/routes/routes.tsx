import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/authentication/Login/Login";
import Register from "../pages/authentication/Register/Register";
import { adminPaths } from "./admin.routes";
import { routesGenerator } from "../utils/routesGenerator";

const router = createBrowserRouter([
  {
    path: "/admin",
    element: <App />,
    children: routesGenerator(adminPaths),
  },
  // {
  //   path: "/faculty",
  //   element: <App />,
  //   children: adminPaths,
  // },
  // {
  //   path: "/student",
  //   element: <App />,
  //   children: adminPaths,
  // },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
]);

export default router;
