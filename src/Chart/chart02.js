// import React from "react";
// import { Line } from "react-chartjs-2";
// // import { Chart as ChartJS } from "chart.js/auto";
// // import { useState } from "react";


// function () {
//   const state = {
//     labels: ['January', 'February', 'March',
//       'April', 'May'],
//     datasets: [
//       {
//         label: 'Rainfall',
//         fill: false,
//         lineTension: 0.5,
//         backgroundColor: 'rgba(75,192,192,1)',
//         borderColor: 'rgba(0,0,0,1)',
//         borderWidth: 2,
//         data: [65, 59, 80, 81, 56]
//       }
//     ]
//   }
//   return (
//     <div>
//       <Line
//         data={state}
//         options={{
//           title: {
//             display: true,
//             text: 'Average Rainfall per month',
//             fontSize: 20
//           },
//           legend: {
//             display: true,
//             position: 'right'
//           }
//         }}
//       />
//     </div>
//   )

// }

// export default ;

import React from "react";
import { Line } from "react-chartjs-2";
// import { Chart as ChartJS } from "chart.js/auto";

function Chart02({ chartData }) {
  return <Line data={chartData} />;
}

export default Chart02;