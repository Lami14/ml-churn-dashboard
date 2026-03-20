# Customer Churn Prediction Dashboard

## 📌 Overview
This project predicts whether a customer is likely to churn using a machine learning model.  
It is an **end-to-end application** with a FastAPI backend, PostgreSQL database, and React frontend dashboard. Users can input customer data, get predictions, and see past prediction history.

---

## 🚀 Tech Stack
- **Python** – backend logic
- **FastAPI** – API endpoints
- **Scikit-learn / XGBoost** – ML model
- **PostgreSQL** – database for storing predictions
- **SQLAlchemy** – ORM for database integration
- **React** – frontend dashboard
- **Render / Vercel** – deployment

---

## 🧩 Features
1. **Predict customer churn**  
   - Input customer info and get a “Churn / No Churn” prediction
2. **Save predictions**  
   - Each prediction is stored in a PostgreSQL database
3. **View prediction history**  
   - Frontend can fetch past predictions from the database
4. **Interactive API docs**  
   - Access via Swagger UI at `/docs`

---

## 📁 Project Structure

```bash
ml-churn-dashboard/
│── backend/
│   │── main.py            # FastAPI app with endpoints
│   │── model.py           # Loads trained ML model
│   │── schema.py          # Input validation
│   │── utils.py           # Preprocessing utilities
│   │── database.py        # DB connection
│   │── models.py          # DB models
│   │── churn_model.pkl    # Trained ML model
│   │── requirements.txt   # Backend dependencies
│
│── frontend/              # React dashboard (Step 2)
│
│── notebooks/
│   │── churn_model_training.ipynb # Training and saving model
│
│── README.md
