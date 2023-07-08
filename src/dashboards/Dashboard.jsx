import clsx from 'clsx';
import { Responsive, WidthProvider } from 'react-grid-layout';
import React, { useState } from 'react';
import DashboardWidget from './Widget/DashboardWidget';
import GridLinesOverlay from './GridLinesOverlay';

const ResponsiveGridLayout = WidthProvider(Responsive);

const MARGIN = 10;
const columnsCount = 24;

/** @param {{ widgetsLayout: Array, className?: string }} props */
export default function Dashboard({ widgetsLayout, className = '' }) {
  const [isShowGridLines, setIsShowGridLines] = useState(false);

  const layouts = { lg: widgetsLayout };

  const onResizeOrDragStart = () => setIsShowGridLines(true);
  const onResizeOrDragStop = () => setIsShowGridLines(false);

  return (
    <div
      className={clsx('border bg-gray-50 rounded-lg w-full p-2 dark:bg-slate-900', className)}
      style={{ direction: 'ltr' }}
    >
      <div className='relative'>
        {isShowGridLines && <GridLinesOverlay colsNumber={columnsCount} margin={MARGIN} color='#999' />}
        <ResponsiveGridLayout
          layouts={layouts}
          breakpoints={{ lg: 1600 }}
          cols={{ lg: columnsCount }}
          draggableCancel='.do-not-drag-me'
          margin={{ lg: [MARGIN, MARGIN] }}
          containerPadding={[0, 0]}
          isBounded={true}
          resizeHandles={['se']}
          rowHeight={50}
          onDragStart={onResizeOrDragStart}
          onDragStop={onResizeOrDragStop}
          onResizeStart={onResizeOrDragStart}
          onResizeStop={onResizeOrDragStop}
        >
          {widgetsLayout.map((currentWidget) => (
            <div key={currentWidget.i}>
              <DashboardWidget key={currentWidget.i} widgetProps={{ ...currentWidget.props, id: currentWidget.i }} />
            </div>
          ))}
        </ResponsiveGridLayout>
      </div>
    </div>
  );
}
