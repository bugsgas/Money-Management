import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';

export default function ChartVersus({ expensePercentage, incomePercentage }) {
  const chartContainer = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      const ctx = chartContainer.current.getContext('2d');

      chartInstance.current = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Expense', 'Income'], 
          datasets: [{
            label: 'Expense Percentage',
            data: [expensePercentage],
            backgroundColor: 'rgba(222, 87, 87, 0.9)',
            barThickness: 30,
            maxBarThickness: 40,
          },
          {
            label: 'Income Percentage',
            data: [incomePercentage], 
            backgroundColor: 'rgba(87, 92, 222, 0.9)',
            barThickness: 30, 
            maxBarThickness: 40,
          }]
        },
        options: {
          indexAxis: 'y',
          plugins: {
            legend: {
              display: false 
            }
          },
          scales: {
            x: {
              display: false, 
              stacked: true 
            },
            y: {
              display: false,
              stacked: true 
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

  const resizeChart = () => {
    if (chartContainer.current && chartContainer.current.parentNode) {
      chartContainer.current.parentNode.style.height = '200px'; 
      chartContainer.current.parentNode.style.width = '100%'; 
    }
  };

  useEffect(() => {
    resizeChart();
  }, []);

  return (
    <div className="chart-container" style={{ position: 'relative', height: '50px', width: '100%' }}>
      <canvas ref={chartContainer} />
    </div>
  );
}
