import { useFundContext } from '../context/FundContext';
import 'chartjs-plugin-datalabels'; // Import the datalabels plugin
import ChartDonut from './ChartDonut'; // Import the ChartDonut component

export default function Analytics() {
  const { transactions } = useFundContext();

  // Calculate deposit, transfer, and payment amounts
  let depositAmount = 0;
  let transferAmount = 0;
  let paymentAmount = 0;

  transactions.forEach(transaction => {
    if (transaction.type === 'deposit') {
      depositAmount += transaction.amount;
    } else if (transaction.type === 'transfer') {
      transferAmount += transaction.amount;
    } else if (transaction.type === 'payment') {
      paymentAmount += transaction.amount;
    }
  });

    // Render ChartDonut only if any of the amounts is non-zero
  const renderChart = depositAmount !== 0 || transferAmount !== 0 || paymentAmount !== 0;

  return (
    <div className="analytics-container">
      <div className="analytics-row">
        <div className="analytics">
          <label>Analytics</label>
          <hr style={{ marginBottom: '15px' }}></hr>
          {renderChart ? (
            <ChartDonut depositAmount={depositAmount} transferAmount={transferAmount} paymentAmount={paymentAmount} />
          ) : (
            <div className="center">
               <p className='btn'>No Data Available</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
