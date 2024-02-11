import { LuLayoutDashboard } from "react-icons/lu";
import { MdManageAccounts } from "react-icons/md";
import OfferedCourse from "../pages/faculty/OfferedCourse/OfferedCourse";
import StudentDashboard from "../pages/students/StudentDashboard/StudentDashboard";

export const facultyPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <StudentDashboard />,
    icon: <LuLayoutDashboard className="size-5" />,
  },
  {
    name: "Offered Course",
    path: "offerred-course",
    icon: <MdManageAccounts className="size-5" />,
    element: <OfferedCourse />,
  },
];
