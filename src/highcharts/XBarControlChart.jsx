import CustomChartHandleRow from './CustomChartHandleRow';
import LineChart from './LineChart/index';

export default function XBarControlChart({
  series,
  isSeriesLoading,
  CL,
  UCL,
  LCL,
  title,
  subtitle,
  xAxisLabel,
  yAxisLabel,
  tooltipValueSuffix,
  isDarkMode,
}) {
  return (
    <div className='flex w-full h-full justify-center items-center flex-col'>
      <LineChart
        title={title}
        subtitle={subtitle}
        xAxisLabel={xAxisLabel}
        xAxisTickStyle={{ fontSize: 12 }}
        yAxisLabel={yAxisLabel}
        tooltipValueSuffix={tooltipValueSuffix}
        isDarkMode={isDarkMode}
        addHorizontalLines={[
          { value: CL, color: 'blue', zIndex: 4, width: 6 },
          { value: UCL, color: 'red' },
          { value: LCL, color: 'red' },
        ]}
        isLoading={isSeriesLoading}
        series={series}
        lineWidth={1}
        setMinY={Math.ceil(LCL) - 2}
        customChartHandleRowRenderer={({ chart }) => <CustomChartHandleRow chart={chart} />}
      />
    </div>
  );
}
