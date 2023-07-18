import { useMemo, useRef, useState } from 'react';
import { createColumnHelper } from '@tanstack/react-table';
import BasicTable from '@src/tables/BasicTable';
import TableFooter from '../TestPage/TableFooter';
import DebouncedInput from '../TestPage/DebouncedInput';
import { mockData } from './mockDB';

/**
 * @type { import('@tanstack/react-table').ColumnHelper<
 *  {
 *    id: number,
 *    name: string,
 *    createdAt: Date,
 * }> }
 */
const columnHelper = createColumnHelper();

const COLUMNS = [
  columnHelper.accessor('id', { header: 'ID' }),
  columnHelper.accessor('name', { header: 'Name' }),
  columnHelper.accessor('createdAt', {
    header: 'Created At',
    sortDescFirst: true,
    cell: (cellData) => new Date(cellData.getValue()).getFullYear(),
  }),
];

export default function DashboardsList() {
  // all useRefs:
  const tableRef = useRef(null);

  // all useStates:
  const [searchText, setSearchText] = useState('');

  // all useMemos:
  const defaultColumn = useMemo(() => ({ enableSorting: true }), []);

  const onCellClick = (data) => {
    console.log('data is:', data);
  };

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
        rowSelectionMode='none'
        onCellClick={onCellClick}
        searchText={searchText}
        setSearchText={setSearchText}
        renderTableFooter={TableFooter}
      />
    </>
  );
}
