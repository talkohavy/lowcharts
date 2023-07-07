import clsx from 'clsx';

export default function Box({ className, children }) {
  return (
    <div
      className={clsx(
        'rounded-md border-1 border-neutrals-50 bg-neutrals-0 p-4 shadow-gray-500 drop-shadow-md',
        className
      )}
    >
      {children}
    </div>
  );
}
