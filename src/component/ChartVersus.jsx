import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';

export default function ChartVersus({ expensePercentage, incomePercentage }) {
  const chartContainer = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      const ctx = chartContainer.current.getContext('2d');

      chartInstance.current = new Chart(ctx, {
        type: 'bar', // Use horizontalBar type
        data: {
          labels: ['Expense', 'Income'], // Labels for the groups
          datasets: [{
            label: 'Expense Percentage',
            data: [expensePercentage], // Data for Dataset 1
            backgroundColor: 'rgba(222, 87, 87, 0.9)',
            barThickness: 30, // Adjust the width of the bars
            maxBarThickness: 40, // Set the maximum width of the bars
          },
          {
            label: 'Income Percentage',
            data: [incomePercentage], // Data for Dataset 2
            backgroundColor: 'rgba(87, 92, 222, 0.9)',
            barThickness: 30, // Adjust the width of the bars
            maxBarThickness: 40, // Set the maximum width of the bars
          }]
        },
        options: {
          indexAxis: 'y', // Set the index axis to y to make it horizontal
          plugins: {
            legend: {
              display: false // Remove the legend
            }
          },
          scales: {
            x: {
              display: false, // Remove the x scale
              stacked: true // Stack bars horizontally
            },
            y: {
              display: false, // Remove the y scale
              stacked: true // Stack bars vertically
            }
          }
        }
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [expensePercentage, incomePercentage]);

  // Function to resize the chart container
  const resizeChart = () => {
    if (chartContainer.current && chartContainer.current.parentNode) {
      chartContainer.current.parentNode.style.height = '200px'; // Set new height
      chartContainer.current.parentNode.style.width = '100%'; // Set new width
    }
  };

  // Call resizeChart when component mounts
  useEffect(() => {
    resizeChart();
  }, []);

  return (
    <div className="chart-container" style={{ position: 'relative', height: '50px', width: '100%' }}>
      <canvas ref={chartContainer} />
    </div>
  );
}
