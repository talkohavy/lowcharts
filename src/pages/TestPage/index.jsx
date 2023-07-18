import { useMemo, useRef, useState } from 'react';
import { createColumnHelper } from '@tanstack/react-table';
import BasicTable from '@src/tables/BasicTable';
import { mockData } from './MOCK_DATA';
import TableFooter from './TableFooter';
import DebouncedInput from './DebouncedInput';

/**
 * @type { import('@tanstack/react-table').ColumnHelper<
 *  {
 *    id: number,
 *    first_name: string,
 *    last_name: string,
 *    date_of_birth: Date,
 *    email: string,
 *    country: string
 * }> }
 */
const columnHelper = createColumnHelper();

const COLUMNS = [
  columnHelper.accessor('id', {
    header: 'ID',
    // enableColumnFilter: true,
    // enableGlobalFilter: true,
    cell: (cellData) => cellData.getValue(),
    enableColumnFilter: true,
  }),
  {
    id: 'name',
    header: 'name',
    colSpan: 2,
    columns: [
      columnHelper.accessor('first_name', { header: 'First Name' }),
      columnHelper.accessor('last_name', { header: 'Last Name' }),
    ],
  },
  columnHelper.accessor('date_of_birth', {
    header: 'Date of Birth',
    sortDescFirst: true,
    cell: (cellData) => new Date(cellData.getValue()).getFullYear(),
  }),
  columnHelper.accessor('email', { header: 'Email' }),
  columnHelper.accessor('country', { header: 'Country' }),
];

export default function TestPage() {
  // all useRefs:
  const tableRef = useRef(null);

  // all useStates:
  const [searchText, setSearchText] = useState('');

  // all useMemos:
  const defaultColumn = useMemo(() => ({ enableSorting: true }), []);

  return (
    <>
      <button onClick={() => console.info('selected row are:', tableRef.current.getSelectedRowModel().flatRows)}>
        Log selected rows
      </button>
      <DebouncedInput
        value={searchText}
        setValue={setSearchText}
        debounceTime={400}
        type='text'
        placeholder='search...'
        className='h-10 border border-black rounded-md p-1 text-lg'
      />
      <BasicTable
        ref={tableRef}
        columnDefs={COLUMNS}
        rowData={mockData}
        defaultColumn={defaultColumn}
        rowSelectionMode='multi'
        searchText={searchText}
        setSearchText={setSearchText}
        renderTableFooter={TableFooter}
      />
    </>
  );
}
