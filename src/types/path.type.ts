export type TPath = {
  name: string;
  path?: string;
  element: JSX.Element;
  icon: JSX.Element;
  children?: TPath[];
};
