import { useMemo } from 'react';
import { useTable, Column, useGlobalFilter } from 'react-table';
import { Status } from './..';
import { Trash2 } from 'react-feather';

interface ReactTableProps<T extends object> {
  data: T[];
  columns: Column<T>[];
  handleDelete: (index: number) => void;
}

export function Table<T extends object>({ data, columns, handleDelete }: ReactTableProps<T>): React.ReactElement {
  const dataTable = useMemo(
    () => data, [data]
  );

  const columnsTable = useMemo(
    () => columns as Column[], [data]
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns: columnsTable, data: dataTable }, useGlobalFilter);

  return (
    <div className="relative overflow-x-auto">
      <table {...getTableProps()} className="text-left w-full">
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()} className="border-b border-[#f1f3f4]">
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()} className="font-medium text-sm text-slate-400 p-4">
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row: any) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className="border-b border-[#f1f3f4]">
                {row.cells.map((cell: any) => {
                  return (
                    <td {...cell.getCellProps()} className="p-4">
                      {cell.column.id === "name" && <p className="font-semibold text-slate-900">{cell.render('Cell')}</p>}
                      {cell.column.id === "step" && <Status type={cell.row.values.step} />}
                      {cell.column.id === "description" && <p className="font-semibold text-slate-900">{cell.render('Cell')}</p>}
                      {cell.column.id === "comment" && (
                        <span className="flex justify-between text-slate-500">
                          <p className="italic">{cell.render('Cell')}</p>
                          <button onClick={() => handleDelete(row.original.id)}><Trash2 className="w-5" /></button>
                        </span>
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}