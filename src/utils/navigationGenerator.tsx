import { TPath } from "../types/path.type";
import { NavLink } from "react-router-dom";

type TSidebarMenu = {
  key: string;
  icon: JSX.Element;
  label: JSX.Element | string;
  children?: TSidebarMenu[];
};

export const navigationGenerator = (navigationPaths: TPath[], role: string) => {
  navigationPaths.reduce((acc: TSidebarMenu[], route: TPath) => {
    if (route.path && route.name) {
      acc.push({
        key: route.name,
        icon: route.icon,
        label: <NavLink to={`/${role}/${route.path}`}>{route.name}</NavLink>,
      });
    }
    if (route.name && route.children) {
      acc.push({
        key: route.name,
        icon: route.icon,
        label: route.name,
        children: route.children.map((child) => ({
          key: child.name,
          icon: child.icon,
          label: <NavLink to={`/${role}/${child.path}`}>{child.name}</NavLink>,
        })),
      });
    }
    return acc;
  }, []);
};
