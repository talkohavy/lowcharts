import { useCallback, useEffect, useState } from 'react';
import { wrapInDebounce } from '@src/utils';

export default function DebouncedInput({ value: outerValue, setValue, debounceTime = 500, ...props }) {
  const [innerValue, setInnerValue] = useState(() => outerValue);

  useEffect(() => {
    setInnerValue(outerValue);
  }, [outerValue]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const setOuterValue = useCallback(wrapInDebounce(setValue, debounceTime), [debounceTime, setValue]);

  return (
    <input
      {...props}
      value={innerValue}
      onChange={(e) => {
        setInnerValue(e.target.value);
        setOuterValue(e.target.value);
      }}
    />
  );
}
