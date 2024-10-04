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
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Sales',
        data: [65, 59, 80, 81, 56, 55, 40],
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
        text: 'Sales Over Time',
      },
    },
  };

  // Data for the Bar Chart
  const barChartData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: 'Revenue',
        data: [15000, 20000, 18000, 22000],
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
        text: 'Quarterly Revenue',
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
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [300, 50, 100],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  const doughnutChartData2 = {
    labels: ['Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: 'Dataset 2',
        data: [200, 150, 90],
        backgroundColor: ['#4BC0C0', '#9966FF', '#FF9F40'],
        hoverBackgroundColor: ['#4BC0C0', '#9966FF', '#FF9F40'],
      },
    ],
  };

  const doughnutChartData3 = {
    labels: ['Red', 'Yellow', 'Blue'],
    datasets: [
      {
        label: 'Dataset 3',
        data: [120, 140, 110],
        backgroundColor: ['#FF6384', '#FFCE56', '#36A2EB'],
        hoverBackgroundColor: ['#FF6384', '#FFCE56', '#36A2EB'],
      },
    ],
  };

  const doughnutChartData4 = {
    labels: ['Pink', 'Cyan', 'Gray'],
    datasets: [
      {
        label: 'Dataset 4',
        data: [180, 90, 130],
        backgroundColor: ['#F67280', '#00CED1', '#B0BEC5'],
        hoverBackgroundColor: ['#F67280', '#00CED1', '#B0BEC5'],
      },
    ],
  };

  const doughnutChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Doughnut Chart',
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
                <Doughnut data={doughnutChartData1} options={doughnutChartOptions} />
            </div>

            <div className='p-4 dashboardDoughnutChart2 w-80 h-80 flex justify-center items-center'>
                {/* Insert Doughnut Chart 2 */}
                <Doughnut data={doughnutChartData2} options={doughnutChartOptions} />
            </div>

            <div className='p-4 dashboardDoughnutChart3 w-80 h-80 flex justify-center items-center'>
                {/* Insert Doughnut Chart 3 */}
                <Doughnut data={doughnutChartData3} options={doughnutChartOptions} />
            </div>

            <div className='p-4 dashboardDoughnutChart4 w-80 h-80 flex justify-center items-center'>
                {/* Insert Doughnut Chart 4 */}
                <Doughnut data={doughnutChartData4} options={doughnutChartOptions} />
            </div>

        </div>
    </div>
  )
}

export default Dashboard;
