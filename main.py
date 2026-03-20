from fastapi import FastAPI
from schema import CustomerData
from model import load_model
from utils import preprocess_input

app = FastAPI(title="Customer Churn Prediction API")

model = load_model()

@app.get("/")
def home():
    return {"message": "Churn Prediction API is running"}

@app.post("/predict")
def predict(data: CustomerData):
    processed_data = preprocess_input(data)
    prediction = model.predict(processed_data)[0]

    result = "Churn" if prediction == 1 else "No Churn"

    return {
        "prediction": result
    }
