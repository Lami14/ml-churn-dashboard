# Customer Churn Prediction Dashboard

## 📌 Overview
This project predicts whether a customer is likely to churn using a machine learning model.  
It is a **full-stack, end-to-end application** with a FastAPI backend, PostgreSQL database, and React frontend dashboard. Users can input customer data, get predictions, and view historical prediction history.

---

## 🌐 Live Demo
- **Frontend Dashboard:** [https://ml-churn-dashboard.vercel.app](https://ml-churn-dashboard.vercel.app)  
- **Backend API:** [https://ml-churn-api.onrender.com/docs](https://ml-churn-api.onrender.com/docs)

---

## 🚀 Tech Stack
- **Python** – backend & ML
- **FastAPI** – API endpoints
- **Scikit-learn / XGBoost** – ML model
- **PostgreSQL** – database for storing predictions
- **SQLAlchemy** – ORM for database integration
- **React** – frontend dashboard
- **Render / Vercel** – deployment

---

## 🧩 Features
1. **Predict customer churn**  
   - Input customer info → get prediction: *Churn / No Churn*
2. **Save predictions**  
   - All predictions are stored in PostgreSQL
3. **View prediction history**  
   - Frontend displays all past predictions
4. **Interactive API docs**  
   - Swagger UI available at `/docs` on backend

---

## 📁 Project Structure

```bash
ml-churn-dashboard/
│── backend/
│   │── main.py
│   │── model.py
│   │── schema.py
│   │── utils.py
│   │── database.py
│   │── models.py
│   │── churn_model.pkl
│   │── requirements.txt
│
│── frontend/
│   │── package.json
│   │── src/
│       │── App.js
│       │── index.js
│       │── api.js
│       │── components/
│           │── PredictionForm.js
│           │── PredictionHistory.js
│       │── App.css
│
│── notebooks/
│   │── churn_model_training.ipynb
│
└── README.md
