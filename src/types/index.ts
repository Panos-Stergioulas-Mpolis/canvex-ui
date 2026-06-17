export type MenuItemsType = {
  label: string;
  icon?: string;
  children?: { label: string; link: string }[];
  link?: string;
};
