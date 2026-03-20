import React, { useState } from "react";
import { predictChurn } from "../api";

const PredictionForm = ({ onAddPrediction }) => {
  const [formData, setFormData] = useState({
    tenure: "",
    MonthlyCharges: "",
    TotalCharges: "",
    Contract: 1,
    InternetService: 1,
    PaymentMethod: 1
  });

  const [prediction, setPrediction] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await predictChurn(formData);
    setPrediction(result.prediction);
    onAddPrediction({ ...formData, prediction: result.prediction, created_at: new Date().toLocaleString() });
  };

  return (
    <div className="form-container">
      <h2>Customer Churn Prediction</h2>
      <form onSubmit={handleSubmit}>
        <input type="number" name="tenure" placeholder="Tenure" value={formData.tenure} onChange={handleChange} required />
        <input type="number" name="MonthlyCharges" placeholder="Monthly Charges" value={formData.MonthlyCharges} onChange={handleChange} required />
        <input type="number" name="TotalCharges" placeholder="Total Charges" value={formData.TotalCharges} onChange={handleChange} required />
        <select name="Contract" value={formData.Contract} onChange={handleChange}>
          <option value={1}>Month-to-Month</option>
          <option value={2}>One Year</option>
          <option value={3}>Two Year</option>
        </select>
        <select name="InternetService" value={formData.InternetService} onChange={handleChange}>
          <option value={1}>DSL</option>
          <option value={2}>Fiber Optic</option>
          <option value={3}>No Internet</option>
        </select>
        <select name="PaymentMethod" value={formData.PaymentMethod} onChange={handleChange}>
          <option value={1}>Electronic Check</option>
          <option value={2}>Mailed Check</option>
          <option value={3}>Bank Transfer</option>
          <option value={4}>Credit Card</option>
        </select>
        <button type="submit">Predict</button>
      </form>
      {prediction && <h3>Prediction: {prediction}</h3>}
    </div>
  );
};

export default PredictionForm;
