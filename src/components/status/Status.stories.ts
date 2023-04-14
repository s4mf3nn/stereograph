import { Status } from "./Status";

export default {
  title: 'Collections/Status',
  component: Status,
  argTypes: {
    isChecked: { control: 'boolean' },
    type: { control: 'radio', options: ['En attente', 'En cours', 'Terminé'] }
  },
};

export const Pending = {
  args: {
    type: 'En attente',
  },
};

export const Ongoing = {
  args: {
    type: 'En cours',
    isChecked: true,
  },
};

export const Completed = {
  args: {
    type: 'Terminé',
    isChecked: true,
  },
};