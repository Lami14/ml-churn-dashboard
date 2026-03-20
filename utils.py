import numpy as np

def preprocess_input(data):
    return np.array([[
        data.tenure,
        data.MonthlyCharges,
        data.TotalCharges,
        data.Contract,
        data.InternetService,
        data.PaymentMethod
    ]])
