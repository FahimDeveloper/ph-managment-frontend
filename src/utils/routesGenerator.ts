import { TPath } from "../types/path.type";

type TRoute = {
  path: string | undefined;
  element: JSX.Element;
};

export const routesGenerator = (routePaths: TPath[]) => {
  routePaths.reduce((acc: TRoute[], route: TPath) => {
    if (route.path && route.element) {
      acc.push({
        path: route.path,
        element: route.element,
      });
    }
    if (route.children) {
      route.children.forEach((child: TPath) => {
        acc.push({
          path: child.path,
          element: child.element,
        });
      });
    }
    return acc;
  }, []);
};
