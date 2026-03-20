import React, { useState, useEffect } from "react";
import PredictionForm from "./components/PredictionForm";
import PredictionHistory from "./components/PredictionHistory";
import { getPredictionHistory } from "./api";
import "./App.css";

function App() {
  const [predictions, setPredictions] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      const history = await getPredictionHistory();
      setPredictions(history);
    };
    fetchHistory();
  }, []);

  const addPrediction = (prediction) => {
    setPredictions([prediction, ...predictions]);
  };

  return (
    <div className="App">
      <PredictionForm onAddPrediction={addPrediction} />
      <PredictionHistory predictions={predictions} />
    </div>
  );
}

export default App;
