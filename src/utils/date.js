import { format } from 'date-fns';

const DATE_FORMATS = {
  dd_MM_yyyy: 'dd/MM/yyyy',
};

/**
 * @param {{ date: Date, wantedFormat: string }} props
 * @returns { string } Returns the date as a string, in the desired format.
 */
function formatDate({ date, wantedFormat }) {
  return format(date, wantedFormat);
}

export { DATE_FORMATS };
export { formatDate };
