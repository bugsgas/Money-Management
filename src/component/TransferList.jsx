import React from 'react';
import { useFundContext } from '../context/FundContext';
import { Link } from 'react-router-dom';
import './Transaction.css';

export default function TransactionList() {
  const { transactions, deleteTransaction } = useFundContext();

  const transferTransactions = transactions.filter(transaction => transaction.type === 'transfer');

  return (
    <div className="transaction-container">
      <div className="transaction">
        <div className="transaction-title">
          <p>Recent Transfers</p>
          <hr />
        </div>
        {transferTransactions.length > 0 ? (
          <ul>
            {transferTransactions.map((transaction, index) => (
              <li key={index}>
                <div className="transaction-list">
                  <div className="circle">
                    <p>{transaction.recipient.charAt(0)}</p>
                  </div>
                  <div className="transaction-details">
                    <div>
                      <p>{transaction.recipient}</p>
                      <p>{transaction.date}</p>
                    </div>
                    <div>
                      <h2>${transaction.amount}</h2>
                    </div>
                  </div>
                  {/* <div className="delete" onClick={() => deleteTransaction(index)}>
                    <p>X</p>
                  </div> */}
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="no-transactions center">
            <p>No transfers yet.</p>
            <Link to="/create" className="btn">Transfer Someone</Link>
          </div>
        )}
      </div>
    </div>
  );
}
