import React, { createContext, useContext, useState } from 'react';

const FundContext = createContext();

export const FundProvider = ({ children }) => {
  const [fund, setFund] = useState(0);
  const [transactions, setTransactions] = useState([]);

  const addFund = (amount, recipient) => {
    const date = new Date().toISOString().split('T')[0];
    setFund(prevFund => prevFund + amount);
    setTransactions(prevTransactions => [...prevTransactions, { type: 'deposit', amount, date, recipient }]);
  };

  const removeFund = (amount, recipient, type) => {
    const date = new Date().toISOString().split('T')[0];
    setFund(prevFund => prevFund - amount);
    setTransactions(prevTransactions => [...prevTransactions, { type, amount, date, recipient }]);
  };

  const deleteTransaction = index => {
    const updatedTransactions = [...transactions];
    updatedTransactions.splice(index, 1);
    setTransactions(updatedTransactions);
  };

  return (
    <FundContext.Provider value={{ fund, addFund, removeFund, transactions, deleteTransaction }}>
      {children}
    </FundContext.Provider>
  );
};

export const useFundContext = () => useContext(FundContext);
