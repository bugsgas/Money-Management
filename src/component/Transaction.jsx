import React, { useState } from 'react';
import { useFundContext } from '../context/FundContext';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';

export default function Transaction() {
  const { fund, removeFund } = useFundContext();
  const [transferAmount, setTransferAmount] = useState('');
  const [paymentAmount, setPaymentAmount] = useState('');
  const [recipient, setRecipient] = useState('');
  const [category, setCategory] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleTransfer = (amount, recipientName) => {
    if (amount <= 0 || isNaN(amount)) {
      setError('Please enter a valid amount for transfer.');
      return;
    }

    if (amount > fund) {
      setError('Transfer amount cannot exceed available funds.');
      return;
    }

    removeFund(amount, recipientName, 'transfer');
    resetTransferFields();
    navigate('/');
  };

  const handlePayment = (amount, selectedCategory) => {
    if (amount <= 0 || isNaN(amount)) {
      setError('Please enter a valid amount for payment.');
      return;
    }

    if (amount > fund) {
      setError('Payment amount cannot exceed available funds.');
      return;
    }

    removeFund(amount, selectedCategory, 'payment');
    resetPaymentFields();
    navigate('/');
  };

  const resetTransferFields = () => {
    setTransferAmount('');
    setRecipient('');
    setError('');
  };

  const resetPaymentFields = () => {
    setPaymentAmount('');
    setCategory('');
    setError('');
  };

  const options = [
    { label: 'Bill', value: 'Bill' },
    { label: 'Top-Up', value: 'Topup' },
    { label: 'Payment', value: 'Payment' }
  ];

  return (
    <div className='transaction-flex'>
      <div className="transfer">
        <div className="transfer-box">
          <h2>Transfer your friend</h2>
          <input
            type="text"
            placeholder="Recipient's Name"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            style={{ margin: '10px 0' }}
          />
          <br />
          <input
            type="number"
            placeholder="Enter amount"
            value={transferAmount}
            onChange={(e) => setTransferAmount(e.target.value)}
            style={{ margin: '10px 0' }}
          />
          <button className='btn' onClick={() => handleTransfer(parseFloat(transferAmount), recipient)}>Make a Transfer</button>
          {error && <p>{error}</p>}
        </div>
      </div>

      <div className="payment">
        <div className="payment-box">
          <h2 style={{ marginBottom: '10px' }} >Pay something</h2>
          <Select
            options={options}
            value={options.find(option => option.value === category)}
            onChange={(selectedOption) => setCategory(selectedOption.value)}
          />
          <br />
          <input
            type="number"
            placeholder="Enter amount"
            value={paymentAmount}
            onChange={(e) => setPaymentAmount(e.target.value)}
            style={{ marginBottom: '10px' }}
          />
          <button className='btn' onClick={() => handlePayment(parseFloat(paymentAmount), category)}>Make a Payment</button>
          {error && <p>{error}</p>}
        </div>
      </div>
    </div>
  );
}
