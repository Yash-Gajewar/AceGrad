import React from 'react';
import { Line, Bar, Doughnut } from 'react-chartjs-2'; // Import Line, Bar, and Doughnut charts
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, ArcElement, Title, Tooltip, Legend } from 'chart.js'; // Import necessary components from Chart.js
import SidebarComponent from '../../components/SidebarComponent/SidebarComponent';
import './Dashboard.css';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement, // Required for Doughnut charts
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {

  // Data for the Line Chart
  const lineChartData = {
    labels: ['1', '2', '3', '4', '5', '6', '7'],
    datasets: [
      {
        label: 'Score',
        data: [30,40,35,50,45,60,65],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.4,
      },
    ],
  };

  const lineChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Score Over Number of Interviews Given',
      },
    },
  };

  // Data for the Bar Chart
  const barChartData = {
    labels: ['1', '2', '3', '4', '5', '6', '7'],
    datasets: [
      {
        label: 'Accuracy',
        data: [30, 45, 35, 55, 50, 60, 54],
        backgroundColor: 'rgba(54, 162, 235, 0.5)', // Bar color
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  const barChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Accuracy Over Number of Interviews Given',
      },
    },
    scales: {
      y: {
        beginAtZero: true, // Ensures the Y-axis starts from zero
      },
    },
  };

  // Data for the Doughnut Charts
  const doughnutChartData1 = {
    labels: ['Filler Words', 'Total Words'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [50, 300],
        backgroundColor: ['#FF0000', '#36A2EB'],
        hoverBackgroundColor: ['#FF0000', '#36A2EB']
      },
    ],
  };

  const doughnutChartData2 = {
    labels: ['Weak Words', 'Total Words'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [50, 300],
        backgroundColor: ['#FF0000', '#36A2EB'],
        hoverBackgroundColor: ['#FF0000', '#36A2EB']
      },
    ],
  };

  const doughnutChartData3 = {
    labels: ['Negative Words', 'Total Words'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [50, 300],
        backgroundColor: ['#FF0000', '#36A2EB'],
        hoverBackgroundColor: ['#FF0000', '#36A2EB']
      },
    ],
  };

  const doughnutChartData4 = {
    labels: ['Sentence Starter Repeaters', 'Total Words'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [50, 300],
        backgroundColor: ['#FF0000', '#36A2EB'],
        hoverBackgroundColor: ['#FF0000', '#36A2EB']
      },
    ],
  };

  const doughnutChartOptions1 = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Filler Words',
      },

    },
    
  };


  const doughnutChartOptions2 = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Weak Words',
      },

    },
    
  };


  const doughnutChartOptions3 = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Negative Words',
      },

    },
    
  };


  const doughnutChartOptions4 = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Sentence Starter Repeaters',
      },

    },
    
  };

  return (
    <div className='flex w-full min-h-[725px]'>
        <SidebarComponent />
        <div className='dashboardContainer w-full min-h-[725px] bg-gray-50'>

            <div className='p-4 dashboardHeading flex justify-center items-center text-4xl font-bold ml-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500'>
                Performance Report
            </div>

            <div className='p-4 dashboardLineChart h-80 flex justify-center items-center'>
                {/* Insert Line Chart here */}
                <Line data={lineChartData} options={lineChartOptions} />
            </div>

            <div className='p-4 dashboardBarChart h-80 flex justify-center items-center '>
                {/* Insert Bar Chart here */}
                <Bar data={barChartData} options={barChartOptions} />
            </div>

            <div className='p-4 dashboardDoughnutChart1 w-80 h-80 flex justify-center items-center'>
                {/* Insert Doughnut Chart 1 */}
                <Doughnut data={doughnutChartData1} options={doughnutChartOptions1} />
            </div>

            <div className='p-4 dashboardDoughnutChart2 w-80 h-80 flex justify-center items-center'>
                {/* Insert Doughnut Chart 2 */}
                <Doughnut data={doughnutChartData2} options={doughnutChartOptions2} />
            </div>

            <div className='p-4 dashboardDoughnutChart3 w-80 h-80 flex justify-center items-center'>
                {/* Insert Doughnut Chart 3 */}
                <Doughnut data={doughnutChartData3} options={doughnutChartOptions3} />
            </div>

            <div className='p-4 dashboardDoughnutChart4 w-80 h-80 flex justify-center items-center'>
                {/* Insert Doughnut Chart 4 */}
                <Doughnut data={doughnutChartData4} options={doughnutChartOptions4} />
            </div>

        </div>
    </div>
  )
}

export default Dashboard;
