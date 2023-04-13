import { Table } from "./Table";

export default {
  title: 'Collections/Table',
  component: Table,
  tags: ['autodocs'],
  argTypes: {},
};

export const Overview = {
  args: {
    data: [
      {
        col1: 'Hello',
        col2: 'World',
      },
      {
        col1: 'react-table',
        col2: 'rocks',
      },
      {
        col1: 'whatever',
        col2: 'you want',
      },
    ],
    columns: [
      {
        Header: 'Column 1',
        accessor: 'col1',
      },
      {
        Header: 'Column 2',
        accessor: 'col2',
      },
    ],
  },
};