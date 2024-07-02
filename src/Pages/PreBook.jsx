import React, { useState } from 'react';

const PreBook = () => {
  const [name, setName] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [upiId, setUpiId] = useState('');
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const paymentInfo = {
      name,
      paymentMethod,
      ...(paymentMethod === 'upi' ? { upiId } : { ...cardDetails }),
    };
    console.log('Payment Info:', paymentInfo);
    
  };

  return (
    <div className="prebook">
      <h2>Pre-Book Payment</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Payment Method:
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <option value="upi">UPI</option>
              <option value="credit-card">Credit Card</option>
            </select>
          </label>
        </div>
        {paymentMethod === 'upi' ? (
          <div>
            <label>
              UPI ID:
              <input
                type="text"
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
                required
              />
            </label>
          </div>
        ) : (
          <div>
            <label>
              Card Number:
              <input
                type="text"
                value={cardDetails.cardNumber}
                onChange={(e) =>
                  setCardDetails({ ...cardDetails, cardNumber: e.target.value })
                }
                required
              />
            </label>
            <label>
              Expiry Date:
              <input
                type="text"
                value={cardDetails.expiryDate}
                onChange={(e) =>
                  setCardDetails({ ...cardDetails, expiryDate: e.target.value })
                }
                required
              />
            </label>
            <label>
              CVV:
              <input
                type="text"
                value={cardDetails.cvv}
                onChange={(e) =>
                  setCardDetails({ ...cardDetails, cvv: e.target.value })
                }
                required
              />
            </label>
          </div>
        )}
        <button type="submit">Submit Payment</button>
      </form>
    </div>
  );
};

export default PreBook;
