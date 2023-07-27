// import React, { useState } from 'react';
// import ReactApexChart from 'react-apexcharts';

// const ApexChart = () => {
//   const [chartData, setChartData] = useState({
//     series: [
//       {
//         name: "High - 2023",
//         data: [28, 29, 33, 36, 32, 32, 33, 27,34,23,26,39]
//       },
//       {
//         name: "Low - 2023",
//         data: [12, 11, 14, 18, 17, 13, 15,10,4,7,16,30]
//       }
//     ],
//     options: {
//       chart: {
//         height: 350,
//         type: 'line',
//         dropShadow: {
//           enabled: true,
//           color: '#000',
//           top: 18,
//           left: 7,
//           blur: 10,
//           opacity: 0.2
//         },
//         toolbar: {
//           show: false
//         }
//       },
//       colors: ['#059473', '#FF0000'],
//       dataLabels: {
//         enabled: true,
//       },
//       stroke: {
//         curve: 'smooth'
//       },
//       title: {
//         text: 'Average High & Low Commodity',
//         align: 'left'
//       },
//       grid: {
//         borderColor: '#e7e7e7',
//         row: {
//           colors: ['#f3f3f3', 'transparent'],
//           opacity: 0.5
//         },
//       },
//       markers: {
//         size: 1
//       },
//       xaxis: {
//         categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
//         title: {
//           text: 'Month'
//         }
//       },
//       yaxis: {
//         title: {
//           text: 'Commodity'
//         },
//         min: 5,
//         max: 40
//       },
//       legend: {
//         position: 'top',
//         horizontalAlign: 'right',
//         floating: true,
//         offsetY: -25,
//         offsetX: -5
//       }
//     }
//   });

//   return (
//     <div id="chart">
//       <ReactApexChart options={chartData.options} series={chartData.series} type="line" height={350} />
//     </div>
//   );
// };

// export default ApexChart;
import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const ApexChart = () => {
  const  prices=['2000000000','3000000000','4000000000','5000000000','3000000000','3000000000','3000000000','3000000000','3000000000', '3000000000','3000000000','3000000000'];
  const [chartData, setChartData] = useState({
    series: [
      {
        name: 'Commodity',
        data: [
          [new Date('2023-01-01').getTime(), 28],
          [new Date('2023-02-01').getTime(), 29],
          [new Date('2023-03-01').getTime(), 33],
          [new Date('2023-04-01').getTime(), 36],
          [new Date('2023-05-01').getTime(), 32],
          [new Date('2023-06-01').getTime(), 32],
          [new Date('2023-07-01').getTime(), 33],
          [new Date('2023-08-01').getTime(), 35],
          [new Date('2023-09-01').getTime(), 37],
          [new Date('2023-10-01').getTime(), 34],
          [new Date('2023-11-01').getTime(), 32],
          [new Date('2023-12-01').getTime(), 30],
        ]
      }
    ],
   
    options: {
      chart: {
        type: 'area',
        stacked: false,
        height: 350,
        zoom: {
          type: 'x',
          enabled: true,
          autoScaleYaxis: true
        },
        toolbar: {
          autoSelected: 'zoom'
        }
      },
      dataLabels: {
        enabled: false
      },
      markers: {
        size: 0
      },
      title: {
        text: 'Stock Price Movement',
        align: 'left'
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.5,
          opacityTo: 0,
          stops: [0, 90, 100]
        }
      },
      yaxis: {
        labels: {
          formatter: function (val) {
            return (prices / 1000000).toFixed(0);
          }
        },
        title: {
          text: 'Price'
        }
      },
      xaxis: {
        type: 'datetime'
      },
      tooltip: {
        shared: false,
        y: {
          formatter: function (val) {
            return (val / 1000000).toFixed(0);
          }
        }
      }
    }
  });

  return (
    <div id="chart">
      <ReactApexChart options={chartData.options} series={chartData.series} type="area" height={350} />
    </div>
  );
};

export default ApexChart;




// import React, { useState } from 'react';
// import ReactApexChart from 'react-apexcharts';

// const ApexChart = () => {
//   const [chartData, setChartData] = useState({
//     series: [{
//       name: "Desktops",
//       data: [10, 41, 35, 51, 49, 62, 69, 91, 148,49,89,32],
//     }],
//     options: {
//       chart: {
//         height: 350,
//         type: 'line',
//         zoom: {
//           enabled: false,
//         },
//       },
//       dataLabels: {
//         enabled: false,
//       },
//       stroke: {
//         curve: 'straight',
//       },
//       title: {
//         text: 'Product Trends by Month',
//         align: 'left',
//       },
//       grid: {
//         row: {
//           colors: ['#f3f3f3', 'transparent'],
//           opacity: 0.5,
//         },
//       },
//       xaxis: {
//         categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep','Oct','Nov','Dec'],
//       },
//     },
//   });

//   return (
//     <div id="chart">
//       <ReactApexChart options={chartData.options} series={chartData.series} type="line" height={350} />
//     </div>
//   );
// };

// export default ApexChart;

