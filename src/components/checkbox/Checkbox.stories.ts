import { Checkbox } from "./Checkbox";

export default {
  title: 'Collections/Checkbox',
  component: Checkbox,
  argTypes: {
    isChecked: { control: 'boolean' },
    label: { control: 'radio', options: ['En attente', 'En cours', 'Terminé'] }
  },
};

export const Overview = {
  args: {
    label: "En cours",
  },
};