import React, { useState, useEffect } from 'react';
import { useFundContext } from '../context/FundContext';
import ChartVersus from './ChartVersus';

export default function ExpenseIncome() {
  const { transactions } = useFundContext();
  const [totalExpense, setTotalExpense] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);

  useEffect(() => {
    let expense = 0;
    let income = 0;

    transactions.forEach(transaction => {
      if (transaction.type === 'transfer' || transaction.type === 'payment') {
        expense += transaction.amount;
      } else if (transaction.type === 'deposit') {
        income += transaction.amount;
      }
    });

    setTotalExpense(expense);
    setTotalIncome(income);
  }, [transactions]);

  const expensePercentage = totalExpense ? ((totalExpense / (totalExpense + totalIncome)) * 100).toFixed(2) : null;
  const incomePercentage = totalIncome ? ((totalIncome / (totalExpense + totalIncome)) * 100).toFixed(2) : null;

  return (
    <div className='versus-container'>
      <div className="versus-row">
        <label>Expenses and Income</label>
        <hr />
        {(totalIncome > 0 || totalExpense > 0) ? (
          <>
            <div className="versus">
              <div className="expense">
                <p>Expense</p>
                {expensePercentage && <h6>{expensePercentage}%</h6>}
                <p>${totalExpense}</p>
              </div>
              <div className="vs">
                <h6>VS</h6>
              </div>
              <div className="income">
                <p>Income</p>
                {incomePercentage && <h6>{incomePercentage}%</h6>}
                <p>${totalIncome}</p>            
              </div>
            </div>
            <ChartVersus expensePercentage={expensePercentage} incomePercentage={incomePercentage} />
          </>
        ) : (
          <div className="center">
            <p className='btn'>No Data Available</p>
          </div>
        )}
      </div>
    </div>
  );
}
