import React from 'react';
import { useFundContext } from '../context/FundContext';

export default function DepositList() {
  const { transactions } = useFundContext();

  // Filter transactions to only include deposits
  const depositTransactions = transactions.filter(
    transaction => transaction.type === 'deposit'
  );

  // Sort the depositTransactions array by date in descending order (newest first)
  depositTransactions.sort((a, b) => new Date(b.date) - new Date(a.date));
  depositTransactions.reverse();

  return (
    <div className='deposit'>
      <h2 style={{paddingTop: '30px'}}>Deposit List</h2>
      {depositTransactions.length > 0 ? (
        <ul className='deposit-list'>
          {depositTransactions.map((transaction, index) => (
            <li key={index} className='deposit-item'>
              <p>Date: {transaction.date}</p>
              <p>Amount: {transaction.amount}</p>              
            </li>
          ))}
        </ul>
      ) : (
        <p>No deposits yet</p>
      )}
    </div>
  );
}
