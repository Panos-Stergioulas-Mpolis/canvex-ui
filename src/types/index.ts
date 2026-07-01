export type MenuItemsType = {
  label: string;
  icon?: string;
  children?: { label: string; link: string }[];
  link?: string;
};

export type SignInInputs = {
  email: string;
  password: string;
};

export type CreateEventInputs = {
  title: string;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  description: string;
};
