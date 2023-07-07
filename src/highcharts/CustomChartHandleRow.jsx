import React, { useState } from 'react';
import { resetZoom, setZoom } from '../highcharts/functionHelpers';

export default function CustomChartHandleRow({ chart }) {
  const [xMinValue, setXMinValue] = useState('');
  const [xMaxValue, setXMaxValue] = useState('');

  const onApplyAxes = () => setZoom({ chart, xMinValue: parseInt(xMinValue), xMaxValue: parseInt(xMaxValue) });

  return (
    <div className='flex items-center justify-center gap-x-2'>
      <button
        onClick={onApplyAxes}
        className='flex justify-center items-center cursor-pointer border-1.5 border-black w-32 bg-red-200 h-10 rounded-lg'
      >
        Apply
      </button>
      <input value={xMinValue} onChange={(e) => setXMinValue(e.target.value)} />
      <input value={xMaxValue} onChange={(e) => setXMaxValue(e.target.value)} />

      <button
        onClick={() => resetZoom(chart)}
        className='h-12 p-2 bg-pink-200 border border-black rounded-lg hover:bg-pink-300 hover:rounded-2xl'
      >
        Reset zoom
      </button>
    </div>
  );
}
