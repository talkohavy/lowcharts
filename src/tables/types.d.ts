import type { ReactNode } from 'react';

type BasicTable = {
  columnDefs: any;
  rowData: Array;
  defaultColumn?: any;
  rowSelectionMode?: 'none' | 'single' | 'multi';
  searchText?: string;
  onCellClick?: (data: any) => void;
  setSearchText?: (value: any) => void;
  renderTableFooter?: (props: any) => ReactNode;
};

export { BasicTable };
