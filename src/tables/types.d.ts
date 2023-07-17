type BasicTable = {
  columnDefs: any;
  rowData: Array;
  defaultColumn?: any;
  rowSelectionMode?: 'none' | 'single' | 'multi';
  searchText?: string;
  setSearchText?: (value: any) => void;
  renderTableFooter?: (props: TableFooterProps) => JSX;
};

export { BasicTable };
