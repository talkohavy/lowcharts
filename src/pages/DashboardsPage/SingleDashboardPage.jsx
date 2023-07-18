import { useParams } from 'react-router-dom';
import { useMemo } from 'react';
import Dashboard from '@src/dashboards/Dashboard';
import { mockData } from './mockDB';

export default function SingleDashboardPage() {
  const { id } = useParams();

  const widgetsLayout = useMemo(() => {
    const currentId = parseInt(id);

    const currentDashboard = mockData.find((item) => item.id === currentId);

    if (!currentDashboard?.widgetsLayout) return [];

    return currentDashboard.widgetsLayout;
  }, [id]);

  return (
    <div className='flex flex-col items-center justify-start gap-4 w-full h-full p-4'>
      <div className='text-4xl font-bold'>Dashboards Page</div>
      <Dashboard widgetsLayout={widgetsLayout} />
    </div>
  );
}
