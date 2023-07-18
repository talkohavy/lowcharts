import React, { forwardRef, memo, useCallback, useMemo, useState } from 'react';
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import IndeterminateCheckbox from './IndeterminateCheckbox';
import DefaultFilter from './DefaultFilter';
import './table.module.css';

const SORTING_ICONS = { asc: '🔼', desc: '🔽', none: '🟦' };
const ROW_SELECTION_MODES = {
  single: { enableRowSelection: true, enableMultiRowSelection: false },
  multi: { enableRowSelection: true, enableMultiRowSelection: true },
  none: { enableRowSelection: false },
};

/**
 * @param { import('./types').BasicTable } props
 * @param { any } ref
 *  */
function BasicTable(
  {
    columnDefs,
    rowData,
    defaultColumn,
    rowSelectionMode = 'none',
    searchText,
    setSearchText,
    renderTableFooter,
    onCellClick,
  },
  ref
) {
  // all useStates:
  const [sorting, setSorting] = useState([]);
  const [rowSelection, setRowSelection] = useState({});
  const [columnFilters, setColumnFilters] = useState([]);

  // all useMemos:
  const data = useMemo(() => rowData, [rowData]);
  const columns = useMemo(
    () =>
      columnDefs.map((curItem, curIndex) => {
        if (curIndex === 0)
          return {
            ...curItem,
            header: ({ table, header }) => (
              <>
                <IndeterminateCheckbox
                  checked={table.getIsAllRowsSelected()}
                  indeterminate={table.getIsSomeRowsSelected()}
                  onChange={table.getToggleAllRowsSelectedHandler()}
                  className='absolute top-0 bottom-0 left-0'
                />
                <div className='first-letter:uppercase'>{header.id}</div>
              </>
            ),
          };

        return curItem;
      }),
    [columnDefs]
  );

  // useReactTable:
  const tableInstance = useReactTable({
    data,
    columns,
    state: { sorting, rowSelection, columnFilters, globalFilter: searchText },
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onGlobalFilterChange: setSearchText,
    onColumnFiltersChange: setColumnFilters,
    // autoResetPageIndex: true,
    enableSorting: true, // default value is true. Enables or Disables sorting for the table.
    enableMultiSort: true,
    sortDescFirst: false, // default value is false.
    ...ROW_SELECTION_MODES[rowSelectionMode],
    // enableFilters: true, // Don't use this! Use two more specific ones below. Enables or disables both global filter & column filters for all columns of the table.
    enableGlobalFilter: true, // Enables or disables JUST the global filter for all the columns.
    enableColumnFilters: true, // Enables or disables JUST the column filters for all columns.
    defaultColumn,
  });
  ref ??= {};
  ref.current = tableInstance;
  const { getHeaderGroups, getRowModel } = tableInstance;

  // all useCallbacks:
  const onHeaderClick = useCallback((e, header) => {
    // @ts-ignore - If clicked on a checkbox, return!
    e.target.tagName !== 'INPUT' && header.column.getToggleSortingHandler()(e);
  }, []);

  return (
    <div>
      <table>
        <thead>
          {getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} colSpan={header.colSpan}>
                  {header.isPlaceholder ? null : (
                    <div className='relative'>
                      <div className='relative flex items-center justify-center gap-5 select-none'>
                        <div>{flexRender(header.column.columnDef.header, header.getContext())}</div>
                      </div>
                      {header.column.getCanFilter() && header.column.columnDef.enableColumnFilter ? (
                        <div>
                          <DefaultFilter table={tableInstance} column={header.column} />
                        </div>
                      ) : null}
                      {header.column.getCanSort() && header.column.columnDef.enableSorting ? (
                        <div
                          className='absolute top-1/2 -translate-y-1/2 right-0 cursor-pointer'
                          onClick={(e) => onHeaderClick(e, header)}
                        >
                          {SORTING_ICONS[header.column.getIsSorted()] ?? SORTING_ICONS.none}
                        </div>
                      ) : null}
                    </div>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {getRowModel().rows.map((row) => (
            <tr
              key={row.id}
              className={row.getIsSelected() ? '!bg-blue-400 !hover:bg-blue-300' : ''}
              onClick={row.getCanSelect() ? row.getToggleSelectedHandler() : undefined}
            >
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} onClick={() => onCellClick?.({ cell, row })}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {renderTableFooter?.({ ...tableInstance })}
    </div>
  );
}

const MemoedForwardedBasicTable = memo(forwardRef(BasicTable));

export default MemoedForwardedBasicTable;
