import React, { useState, useEffect } from "react";
import axios from "axios";

const Payout = () => {
  const [payoutDetails, setPayoutDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch payout details from API
    const fetchPayoutDetails = async () => {
      try {
        const response = await axios.get("https://api.example.com/payout"); // replace with your payout API
        setPayoutDetails(response.data);
      } catch (err) {
        setError("Failed to fetch payout details");
      } finally {
        setLoading(false);
      }
    };

    fetchPayoutDetails();
  }, []);

  if (loading) {
    return <div>Loading payout details...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="payout-container">
      <h2>Payout Details</h2>
      <div className="payout-info">
        <div className="payout-item">
          <span className="payout-label">Payout Amount: </span>
          <span className="payout-value">{payoutDetails.amount}</span>
        </div>
        <div className="payout-item">
          <span className="payout-label">Payout Method: </span>
          <span className="payout-value">{payoutDetails.method}</span>
        </div>
        <div className="payout-item">
          <span className="payout-label">Status: </span>
          <span className="payout-value">{payoutDetails.status}</span>
        </div>
        <div className="payout-item">
          <span className="payout-label">Transaction ID: </span>
          <span className="payout-value">{payoutDetails.transactionId}</span>
        </div>
      </div>
      <button onClick={() => alert("Payout initiated!")}>
        Initiate Payout
      </button>
    </div>
  );
};

export default Payout;
