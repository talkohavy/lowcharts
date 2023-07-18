import { AgGridReact } from 'ag-grid-react';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

// const MyCustomizedCell = (props) => {
//   console.log('props are:', props);

//   return (
//     <div>
//       {props.value}
//       {props.aaa ?? '1'}
//     </div>
//   );
// };

export default function DashboardsList() {
  const agGridRef = useRef();
  const [aaa, setaaa] = useState('left');
  const [rowData, setRowData] = useState([
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxster', price: 72000 },
  ]);
  const columnDefs = useMemo(
    () => [
      // { field: 'make', cellRenderer: MyCustomizedCell, cellRendererParams: { aaa: 'yyy' } },
      { field: 'make', floatingFilter: true },
      { field: 'model', pinned: aaa },
      { field: 'price' },
      { field: 'model' },
      { field: 'price' },
      { field: 'model' },
      { field: 'price' },
      { field: 'model' },
      { field: 'price' },
      { field: 'model' },
      { field: 'price' },
      { field: 'model' },
      { field: 'price' },
      { field: 'model' },
      { field: 'price' },
      { field: 'model' },
      { field: 'price' },
      { field: 'model' },
      { field: 'price' },
    ],
    [aaa]
  );

  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      filter: true,
      filterParams: {
        debounceMs: 2000,
        // buttons: ['clear', 'apply', 'cancel', 'reset'],
      },
    }),
    []
  );

  useEffect(() => {
    fetch('https://www.ag-grid.com/example-assets/row-data.json')
      .then((result) => result.json())
      .then((newRowData) => setRowData(newRowData));
  }, []);

  const onCellClicked = useCallback((e) => {
    console.log(e);
  }, []);

  // @ts-ignore
  const onClearSelection = useCallback(() => agGridRef.current?.api.deselectAll(), []);

  return (
    <>
      <button type='button' onClick={onClearSelection}>
        Clear Selection
      </button>
      <button className='border border-black' type='button' onClick={() => setaaa('undefined')}>
        to null undefined
      </button>
      <div className='ag-theme-alpine w-full h-full'>
        <AgGridReact
          ref={agGridRef}
          onCellClicked={onCellClicked}
          rowData={rowData}
          // @ts-ignore
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          rowSelection='multiple'
          animateRows={true}
        />
      </div>
    </>
  );
}
