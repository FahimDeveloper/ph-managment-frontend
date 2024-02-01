import { LuLayoutDashboard } from "react-icons/lu";
import AdminDashboard from "../pages/admin/AdminDashboard/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent/CreateStudent";
import { MdManageAccounts, MdOutlineAdminPanelSettings } from "react-icons/md";
import { GrUserAdmin } from "react-icons/gr";
import { PiStudent } from "react-icons/pi";

export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
    icon: <LuLayoutDashboard className="size-5" />,
  },
  {
    name: "User Management",
    icon: <MdManageAccounts className="size-5" />,
    children: [
      {
        name: "Create Admin",
        path: "create-admin",
        element: <CreateAdmin />,
        icon: <MdOutlineAdminPanelSettings className="size-5" />,
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: <CreateFaculty />,
        icon: <GrUserAdmin className="size-5" />,
      },
      {
        name: "Create Student",
        path: "create-student",
        element: <CreateStudent />,
        icon: <PiStudent className="size-5" />,
      },
    ],
  },
];
