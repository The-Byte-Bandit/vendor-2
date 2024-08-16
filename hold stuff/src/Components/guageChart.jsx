import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { typography } from '../style';

ChartJS.register(ArcElement, Tooltip, Legend);

function GuageChart(props) {
  // Handle empty or non-array chartData
  const chartData = props.chartData || [];  // Use empty array as default
  console.log(chartData);

  // Calculate sum with error handling
  let sum = 0;
  chartData.forEach(num => {
    if (typeof num === 'number') { // Check if each element is a number
      sum += num;
    } else {
      console.warn('Invalid data type in chartData. Expected numbers.');
    }
  });

  // Sample data for the Doughnut chart
  const data = {
    labels: [],
    datasets: [
      {
        label: 'summary',
        data: chartData, // Example data values
        backgroundColor: ['rgba(55, 93, 251, 1)', 'rgba(53, 185, 233, 1)', 'rgba(226, 228, 233, 1)'], // Example background colors
        borderColor: ['rgba(255, 255, 255, 1)'],
        cutout: '80%',
        borderWidth: 2,
        circumference: 180,
        rotation: 270,
      },
    ],
  };


  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        enabled: false, // Disable default tooltip
      },
    },
  };

  return (
    <div className='flex w-full items-center justify-center'>
      <div className='chart-container relative z-0'>
        <Doughnut data={data} options={options} />
        <div className='absolute flex flex-col justify-center items-center top-1/2 left-1/2 -translate-x-1/2 z-10'>
          <h5 className={`${typography.subheadingXSmall} text-text-sub-500`}>SPENT</h5>
          <h5 className={` text-text-main-900 inter text-[24px] text-center font-medium `}>₦{sum.toLocaleString()} </h5>
        </div>
      </div>
    </div>
  );
}

export default GuageChart;
