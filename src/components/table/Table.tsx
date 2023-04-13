import { useMemo } from 'react';
import { useTable, Column, useGlobalFilter } from 'react-table';

interface ReactTableProps<T extends object> {
  data: T[];
  columns: Column<T>[];
}
export function Table<T extends object>({ data, columns }: ReactTableProps<T>): React.ReactElement {
  const dataTable = useMemo(
    () => data, []
  );

  const columnsTable = useMemo(
    () => columns as Column[], []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns: columnsTable, data: dataTable }, useGlobalFilter);

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} onClick={() => console.log(row.id)}>
              {row.cells.map(cell => {
                return (
                  <td {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table >
  );
}