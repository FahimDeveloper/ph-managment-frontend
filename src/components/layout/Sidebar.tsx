import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { adminPaths } from "../../routes/admin.routes";
import { navigationGenerator } from "../../utils/navigationGenerator";
import { facultyPaths } from "../../routes/faculty.routes";
import { studentPaths } from "../../routes/student.routes";

const userRole = {
  ADMIN: "admin",
  FACULTY: "faculty",
  STUDENT: "student",
};

const Sidebar = ({ collapsed }: { collapsed: boolean }) => {
  const role = "faculty";

  let sidebarItems;
  switch (role) {
    case userRole.ADMIN:
      sidebarItems = navigationGenerator(adminPaths, userRole.ADMIN);
      break;
    case userRole.FACULTY:
      sidebarItems = navigationGenerator(facultyPaths, userRole.FACULTY);
      break;
    case userRole.STUDENT:
      sidebarItems = navigationGenerator(studentPaths, userRole.STUDENT);
      break;
    default:
      break;
  }

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="text-white text-center text-xl font-semibold my-2">
        PH Uni
      </div>
      <Menu theme="dark" mode="inline" items={sidebarItems} />
    </Sider>
  );
};

export default Sidebar;
