import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import 'chartjs-plugin-datalabels'; // Import the datalabels plugin

export default function ChartDonut({ depositAmount, transferAmount, paymentAmount }) {
  const chartContainer = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    // Destroy existing Chart instance if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Create the chart
    const ctx = chartContainer.current.getContext('2d');

    chartInstance.current = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Deposit', 'Transfer', 'Payment'],
        datasets: [{
          data: [depositAmount, transferAmount, paymentAmount],
          backgroundColor: ['rgba(87, 92, 222, 0.9)', 'rgba(222, 87, 87, 0.9)', 'rgba(223, 107, 30, 0.9)'],
        }]
      },
      options: {
        plugins: {
          legend: { display: false, position: 'bottom' },
          datalabels: { // Configure the datalabels plugin
            color: 'white', // Font color
            font: { weight: 'bold' }, // Font weight
            formatter: (value, context) => { // Custom formatter to display value
              return '$' + value; // Add dollar sign before the value
            }
          }
        },
        maintainAspectRatio: false
      }
    });

    resizeChartContainer();
  }, [depositAmount, transferAmount, paymentAmount]);

  const resizeChartContainer = () => {
    if (chartContainer.current && chartContainer.current.parentNode) {
      chartContainer.current.parentNode.style.height = '150px';
    }
  };

  return (
    <div className="chart-container" style={{ position: 'relative', width: '100%' }}>
      <canvas ref={chartContainer} />
    </div>
  );
}
