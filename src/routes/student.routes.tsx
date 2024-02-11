import { LuLayoutDashboard } from "react-icons/lu";
import FacultyDashboard from "../pages/faculty/FacultyDashboard/FacultyDashboard";
import { MdManageAccounts } from "react-icons/md";
import OfferedCourse from "../pages/faculty/OfferedCourse/OfferedCourse";

export const studentPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <FacultyDashboard />,
    icon: <LuLayoutDashboard className="size-5" />,
  },
  {
    name: "Offered Course",
    path: "offerred-course",
    icon: <MdManageAccounts className="size-5" />,
    element: <OfferedCourse />,
  },
];
