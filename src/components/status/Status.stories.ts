import { Status } from "./Status";

export default {
  title: 'Collections/Status',
  component: Status,
  tags: ['autodocs'],
  argTypes: {},
};

export const Pending = {
  args: {
    type: 'En attente',
  },
};

export const Ongoing = {
  args: {
    type: 'En cours',
  },
};

export const Completed = {
  args: {
    type: 'Terminé',
  },
};