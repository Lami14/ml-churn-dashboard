import React from "react";

const PredictionHistory = ({ predictions }) => {
  return (
    <div className="history-container">
      <h2>Prediction History</h2>
      {predictions.length === 0 ? (
        <p>No predictions yet</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Tenure</th>
              <th>Monthly</th>
              <th>Total</th>
              <th>Contract</th>
              <th>Internet</th>
              <th>Payment</th>
              <th>Prediction</th>
              <th>Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {predictions.map((p, index) => (
              <tr key={index}>
                <td>{p.tenure}</td>
                <td>{p.MonthlyCharges}</td>
                <td>{p.TotalCharges}</td>
                <td>{p.Contract}</td>
                <td>{p.InternetService}</td>
                <td>{p.PaymentMethod}</td>
                <td>{p.prediction}</td>
                <td>{p.created_at}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default PredictionHistory;
