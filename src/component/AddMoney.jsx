import { useState } from 'react';
import { useFundContext } from '../context/FundContext';
import DepositList from './DepositList'

export default function AddMoney() {
  const { fund, addFund, removeFund } = useFundContext();
  const [amount, setAmount] = useState('');

  const handleAddFund = (e) => {
    e.preventDefault();
    const parsedAmount = parseInt(amount);
    if (!isNaN(parsedAmount) && parsedAmount > 0) {
      addFund(parsedAmount);
      setAmount('');
    }
  };

  return (
    <div className='funds-container'>
      <form onSubmit={handleAddFund}>
        <h2>Add Funds</h2>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount to add"
        />
        <button className='btn'>Make deposit</button>
      </form>
      <DepositList />
    </div>
  );
};
