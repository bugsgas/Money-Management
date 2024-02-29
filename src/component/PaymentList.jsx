import React from 'react';
import { useFundContext } from '../context/FundContext';
import { Link } from 'react-router-dom';
import './Transaction.css';

export default function PaymentList() {
  const { transactions, deleteTransaction } = useFundContext();

  const paymentTransactions = transactions.filter(transaction => transaction.type === 'payment');

  return (
    <div className="transaction-container">
      <div className="transaction">
        <div className="transaction-title">
          <p>Recent Payments</p>
          <hr />
        </div>
        {paymentTransactions.length > 0 ? (
          <ul>
            {paymentTransactions.map((transaction, index) => (
              <li key={index} className="transaction-list">
                <div className="circle">
                  <p>{transaction.recipient.charAt(0)}</p></div>
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
              </li>
            ))}
          </ul>
        ) : (
          <div className="no-transactions center">
            <p>No payment yet</p>
            <Link to="/create" className="btn">Make a payment</Link>
          </div>
        )}
      </div>
    </div>
  );
}
