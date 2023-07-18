import { useNavigate } from 'react-router-dom';
import { useMemo, useRef, useState } from 'react';
import { createColumnHelper } from '@tanstack/react-table';
import BasicTable from '@src/tables/BasicTable';
import { DATE_FORMATS, formatDate } from '@src/utils';
import TableFooter from '../TestPage/TableFooter';
import DebouncedInput from '../TestPage/DebouncedInput';
import { mockData } from './mockDB';

const dashboardPagePrefix = '/dashboards/';

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
  columnHelper.accessor('name', { header: 'Name', enableColumnFilter: true }),
  columnHelper.accessor('createdAt', {
    header: 'Created At',
    sortDescFirst: true,
    enableGlobalFilter: false,
    enableColumnFilter: true,
    cell: (cellData) => formatDate({ date: new Date(cellData.getValue()), wantedFormat: DATE_FORMATS.dd_MM_yyyy }),
  }),
];

export default function DashboardsList() {
  // all useRefs:
  const tableRef = useRef(null);

  // all useStates:
  const [searchText, setSearchText] = useState('');

  // all useMemos:
  const defaultColumn = useMemo(() => ({ enableSorting: true }), []);

  // all package uses:
  const navigate = useNavigate();

  const onCellClick = ({ row }) => navigate(`${dashboardPagePrefix}${row.original.id}`);

  return (
    <div className='w-full flex items-start justify-center mt-10'>
      <div className='w-full flex flex-col max-w-6xl gap-y-5'>
        <div className='flex items-center justify-between w-full'>
          <DebouncedInput
            value={searchText}
            setValue={setSearchText}
            debounceTime={400}
            type='text'
            placeholder='search...'
            className='h-10 border border-black rounded-md p-1 text-lg'
          />
          <button
            type='button'
            onClick={() => console.log('new dashboard created!')}
            className='h-10 text-white border border-black rounded-lg px-1 bg-red-400 hover:bg-red-500 hover:rounded-xl active:bg-red-600 active:rounded-2xl'
          >
            Create Dashboard
          </button>
        </div>
        <div className='w-full border border-black p-4 rounded-lg'>
          <BasicTable
            ref={tableRef}
            columnDefs={COLUMNS}
            rowData={mockData}
            defaultColumn={defaultColumn}
            rowSelectionMode='none'
            onCellClick={onCellClick}
            searchText={searchText}
            setSearchText={setSearchText}
            renderTableFooter={(props) => <TableFooter {...props} />}
          />
        </div>
      </div>
    </div>
  );
}
