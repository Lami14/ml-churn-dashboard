from database import SessionLocal
from models import Prediction

@app.post("/predict")
def predict(data: CustomerData):
    db = SessionLocal()

    processed_data = preprocess_input(data)
    prediction = model.predict(processed_data)[0]
    result = "Churn" if prediction == 1 else "No Churn"

    new_record = Prediction(
        tenure=data.tenure,
        monthly_charges=data.MonthlyCharges,
        total_charges=data.TotalCharges,
        contract=data.Contract,
        internet_service=data.InternetService,
        payment_method=data.PaymentMethod,
        prediction=result
    )

    db.add(new_record)
    db.commit()
    db.close()

    return {"prediction": result}
