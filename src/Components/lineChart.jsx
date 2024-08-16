
// import { Chart as ChartJS, LineElement, PointElement, Title, LinearScale, CategoryScale, Legend, Tooltip } from "chart.js";
// import { Line } from "react-chartjs-2";
import { typography } from '../style';
import { percentageArrowUp } from '../constants/constant';
import PropTypes from 'prop-types';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// ChartJS.register(LineElement, PointElement, Title, LinearScale, CategoryScale, Legend, Tooltip);

function LineChartComponent(props) {
  const chartData = props.chartData || []; // Use empty array as default
  console.log(chartData);


  const data = [
    // { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
    // { name: 'Page B', uv: 300, pv: 1398, amt: 2210 },
    // { name: 'Page C', uv: 200, pv: 9800, amt: 2290 },
    // { name: 'Page D', uv: 278, pv: 3908, amt: 2000 },
    // { name: 'Page E', uv: 189, pv: 4800, amt: 2181 },
    // { name: 'Page F', uv: 239, pv: 3800, amt: 2500 },
    // { name: 'Page G', uv: 349, pv: 4300, amt: 2100 },


    { name: 'First Week', 'This month': 3429, 'Last month': 5387 },
    { name: 'Second Week', 'This month': 7329, 'Last month': 5337 },
    { name: 'Third Week', 'This month': 3991, 'Last month': 1387 },
    { name: 'Fourth Week', 'This month': 5549, 'Last month': 2434 },
    
  ];




const months=['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']








  // Assuming chartData is an array of objects with 'x' and 'y' properties
  // const labels = chartData.map(item => item.x);
  // const data = chartData.map(item => item.y);

  // // Sample data for the Line chart (if chartData is empty)
  // const fallbackData = {
  //   labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  //   datasets: [
  //     {
  //       label: 'This Month',
  //       data: [10, 20, 30, 5, 15, 25],
  //       backgroundColor: 'rgba(86, 84, 212, 1)',
  //       borderColor: 'rgba(86, 84, 212, 1)',
  //       pointRadius: 5,
  //       pointHitRadius: 10,
  //       pointHoverBackgroundColor: 'rgba(255, 255, 255, 1)',
  //       pointHoverBorderColor: 'rgba(86, 84, 212, 1)',
  //       pointBorderWidth: 2,
  //     },
  //     {
  //       label: 'Last Month',
  //       data: [11, 67, 62, 1, 25, 7],
  //       backgroundColor: 'rgba(224, 224, 224, 1)',
  //       borderColor: 'rgba(224, 224, 224, 1)',
  //       pointRadius: 5,
  //       pointHitRadius: 10,
  //       pointHoverBackgroundColor: 'rgba(255, 255, 255, 1)',
  //       pointHoverBorderColor: 'rgba(224, 224, 224, 1)',
  //       pointBorderWidth: 2,
  //     },
  //   ],
  // };

  // const actualData = {
  //   labels: labels,
  //   datasets: [
  //     {
  //       label: props.label || 'Line Data', // Use prop for label
  //       data: data,
  //       backgroundColor: 'rgba(54, 162, 235, 0.2)',
  //       borderColor: 'rgba(54, 162, 235, 1)',
  //       pointRadius: 5,
  //       pointHitRadius: 10,
  //       pointHoverBackgroundColor: 'rgba(54, 162, 235, 1)',
  //       pointHoverBorderColor: 'rgba(220, 220, 220, 1)',
  //       pointBorderWidth: 2,
  //     },
  //   ],
  // };

  // const chartDataToUse = chartData.length > 0 ? actualData : fallbackData;
  // console.log(chartDataToUse);

  // const options = {
  //   responsive: true,
  //   maintainAspectRatio: false,
  //   layout: {
  //     padding: {
  //       top: 0,
  //       right: 0,
  //       bottom: 0,
  //       left: 0
  //     },
  //     margin: {
  //       top: 0,
  //       right: 0,
  //       bottom: 0,
  //       left: 0
  //     }
  //   },
  //   scales: {
  //   x: {
  //     grid: {
  //       display: false, 
  //       color: "#992",
  //     },
  //   },
  //   y: {
  //     border: {
  //       beginAtZero: true,
  //       display: false,
        
  //     },
  //     grid:{
  //       drawTicks: false,
  //       color: (ctx)=>{
  //           const value = ctx?.tick?.value;
  //           console.log(value);
  //           return 'rgba(233, 233, 233, 1)'

  //       },
  //       display: true,
        
  //     }
  //   },
  //   },
  //   plugins: {
  //     legend: {
  //       display: true,
  //       position: 'top',
  //       align: 'end',
  //       labels: {
  //         font: {
  //           size: 9, // Adjust font size for legend items
  //         },
  //         usePointStyle: true, // Use same style as data points (optional)
  //         pointStyle: 'circle', // Specify point style (optional)
  //         // Legend item marker radius (optional)
  //         pointRadius: 6, // Adjust legend item marker radius
  //       },
  //     },
  //     tooltip: {
  //       enabled: true, // Enable tooltip for LineChart
  //     },
  //   },
  // };

  const renderLegend = () => {
  const  payload  = ['This month', 'Last month']

  return (
    <div className={`flex flex-row  w-full justify-between items-center`}>
      <div className='flex flex-col flex-1'>
        <div>
          <h5 className={`inter font-medium text-[32px] text-text-main-900`}>
            ₦94,127
          </h5>
        </div>

        <div className='flex flex-row gap-[4px] items-center'>
          <div className='h-[16px] w-[53px] flex items-center justify-center'>
            <span className={`${typography.subheading2XSmall} bg-[#8FE7BE] text-[#1DBF73] rounded-[999px] py-[2px] px-[6px] h-[100%] w-[100%] flex items-center justify-center `}>
              <img src={percentageArrowUp} alt='arrow'/> 12%</span>
          </div>

          <p className={`${typography.paragraphMedium}`}>
            vs last years
          </p>
        </div>
      </div>

      <div className=' ml-auto '> 
        <div className='flex flex-row gap-[8px] '>
          {
            payload.map((entry, index) => (
              <div key={`item-${index}`} className='text-[#878787] flex flex-row items-center gap-[4px]'>
              <div className={` ${index === 0 && 'bg-[#5654D4]'} ${index === 1 && 'bg-[#E0E0E0]'}   w-[9px] h-[9px] rounded-[4px]`}></div>
              {entry}
              </div>
            ))
          }
        </div>
      
      </div>
    </div>
  );
}
  
  return (
    <div className='flex flex-col gap-[8px] w-full h-full'>
      <div className='line-chart-container relative z-0' style={{ maxwidth: '1000px', height: '300px' }}>
        {/* <Line data={chartDataToUse} options={options} /> */}
        <ResponsiveContainer  width="100%" height={270} >
          <LineChart width={730} height={250} data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false}/>
            <XAxis dataKey="name" hide={true}/>
            <YAxis hide={true}/>
            <Tooltip />
            <Legend content={renderLegend} verticalAlign='top' width='100%' iconSize={8} wrapperStyle={{ paddingBottom: 10 }} style={{ display: 'flex', alignitems: 'center' }}/>
            <Line type="linear" legendType="circle" dataKey="This month" stroke="rgba(86, 84, 212, 1)" activeDot={{ r: 8 }} />
            <Line type="linear" legendType="circle" dataKey="Last month" stroke="#E0E0E0" />
        </LineChart>
      </ResponsiveContainer>
      </div>

      <div className='flex flex-row flex-1 w-full justify-between px-[4px]'>
        {
          months.map((entry, index) => (
            <button type='button' key={`item-${index}`} className={`${typography.paragraphSmall}text-[#878787] hover:text-[#5654D4] hover:bg-[#EEEEFB] rounded-[100px] max-w-[60px] flex flex-1 flex-row items-center justify-center gap-[4px]`}>
            {entry}
            </button>
          ))
        }
      </div>
    </div>
  );
}

LineChartComponent.propTypes = {
  chartData: PropTypes.arrayOf(PropTypes.number)  // if it's an array of numbers
};


LineChartComponent.defaultProps = {
chartData: []                   
};

export default LineChartComponent;
