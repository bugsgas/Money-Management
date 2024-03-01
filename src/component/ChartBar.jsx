import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';
import { useFundContext } from '../context/FundContext';
import _ from 'lodash'; // Import lodash library for data manipulation

export default function ChartBar() {
  const chartContainer = useRef(null);
  const chartInstance = useRef(null);
  const { transactions } = useFundContext();

  useEffect(() => {
    if (chartContainer.current) {
      const ctx = chartContainer.current.getContext('2d');

      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      // Group transactions by month and sum deposit, transfer, and payment amounts
      const groupedTransactions = _.groupBy(transactions, transaction => new Date(transaction.date).getMonth());
      const chartData = Object.keys(groupedTransactions).map(month => {
        const depositAmount = groupedTransactions[month]
          .filter(transaction => transaction.type === 'deposit')
          .reduce((sum, transaction) => sum + transaction.amount, 0);

        const transferAmount = groupedTransactions[month]
          .filter(transaction => transaction.type === 'transfer')
          .reduce((sum, transaction) => sum + transaction.amount, 0);

        const paymentAmount = groupedTransactions[month]
          .filter(transaction => transaction.type === 'payment')
          .reduce((sum, transaction) => sum + transaction.amount, 0);

        return {
          month: month,
          deposit: depositAmount,
          transfer: transferAmount,
          payment: paymentAmount
        };
      });

     
      const labels = ['February'];
      const depositData = chartData.map(item => item.deposit);
      const transferData = chartData.map(item => item.transfer);
      const paymentData = chartData.map(item => item.payment);

      chartInstance.current = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [
            {
              label: 'Deposit',
              data: depositData,
              backgroundColor: 'rgba(87, 92, 222, 0.9)',
            },
            {
              label: 'Transfer',
              data: transferData,
              backgroundColor: 'rgba(222, 87, 87, 0.9)',
            },
            {
              label: 'Payment',
              data: paymentData,
              backgroundColor: 'rgba(223, 107, 30, 0.9)',
            },
          ],
        },
        options: {
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            x: {
              grid: {
                display: false,
              },
            },
            y: {
              grid: {
                display: false,
              },
              beginAtZero: true,
            },
          },
        },
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [transactions]);

  return <canvas ref={chartContainer} />;
}
