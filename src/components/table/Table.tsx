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
    <div className="relative overflow-x-auto bg-[#181818] rounded-2xl">
      <table {...getTableProps()} className="text-left w-full min-w-[768px]">
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()} className="">
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()} className="font-semibold text-sm text-[#8f8f8f] uppercase p-4">
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
              <tr {...row.getRowProps()} className="border-b border-[#262626] transition hover:bg-[#282828] cursor-pointer">
                {row.cells.map((cell: any) => {
                  return (
                    <td {...cell.getCellProps()} className="px-4 py-4">
                      {cell.column.id === "name" && <p className="text-white">{cell.render('Cell')}</p>}
                      {cell.column.id === "step" && <Status type={cell.row.values.step} />}
                      {cell.column.id === "description" && <p className="text-white">{cell.render('Cell')}</p>}
                      {cell.column.id === "comment" && (
                        <span className="flex justify-between items-center text-[#8f8f8f]">
                          <p className="">{cell.render('Cell')}</p>
                          <button className="bg-black px-3 py-1 rounded-lg flex items-center gap-2 text-xs font-semibold" onClick={() => handleDelete(row.original.id)}>
                            <Trash2 className="w-4" />Supprimer
                          </button>
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