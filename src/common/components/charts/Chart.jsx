import React from 'react';
import ReactApexChart from 'react-apexcharts';

const options = {
  chart: {
    type: 'donut',
  },
  colors: ['#10B981', '#6577F3'],
  labels: ['Book Revenue', 'Subscription'],
  legend: {
    show: true,
    horizontalAlign: 'center',
    labels: {
        useSeriesColors: true,
    },
    fontFamily: 'Nunito',
    position: 'right'
  },

  plotOptions: {
    pie: {
      donut: {
        size: '65%',
        background: 'transparent',
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  responsive: [
    {
      breakpoint: 2600,
      options: {
        chart: {
          width: 380,
        },
      },
    },
    {
      breakpoint: 640,
      options: {
        chart: {
          width: 200,
        },
      },
    },
  ],
};

const Chart = ({title, state}) => {

    const calculatePercentages = (series) => {
        const total = series.reduce((acc, count) => acc + count, 0);
        
        if (total === 0) {
            // Avoid division by zero
            return series.map(() => 0);
        }
        
        return series.map((count) => Number((count / total) * 100).toFixed(2));
    };

    const percentages = calculatePercentages(state.chart.map(item => item.value));

    return (
        <div className="col-span-12 rounded-lg border border-gray-900 bg-[#222637] px-5 pt-7.5 pb-8 shadow-default sm:px-7.5 xl:col-span-5">
            <div className="mx-4 my-5 justify-between gap-4 sm:flex">
            <div>
                <h5 className="text-xl font-semibold text-white">
                {title}
                </h5>
            </div>
            </div>

            <div className="mb-2">
            <div id="chart" className="mx-auto flex justify-center">
                <ReactApexChart
                options={options}
                series={state.chart.map(item => item.value)}
                type="donut"
                />
            </div>
            </div>

            <div className="flex flex-col items-end justify-center gap-y-3 w-full">
            {state.chart.map((item, index) => (
                <div key={index} className="px-4 sm:w-1/2">
                <div className="flex items-center justify-end gap-x-1">
                    <div className={`mb-[1px] mr-2 block h-3 w-3 max-w-3 rounded-full ${item.color}`}></div>
                    <p className="flex w-full justify-between text-sm font-medium text-white lg:w-1/2">
                      <div>{item.label}</div>
                      <div>{percentages[index] + "%"}</div>
                    </p>
                </div>
                </div>
            ))}
            </div>
        </div>
    );
};

export default Chart;
