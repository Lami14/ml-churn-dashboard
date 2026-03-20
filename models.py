from sqlalchemy import Column, Integer, Float, String, DateTime
from database import Base
from datetime import datetime

class Prediction(Base):
    __tablename__ = "predictions"

    id = Column(Integer, primary_key=True, index=True)
    tenure = Column(Integer)
    monthly_charges = Column(Float)
    total_charges = Column(Float)
    contract = Column(Integer)
    internet_service = Column(Integer)
    payment_method = Column(Integer)
    prediction = Column(String)
    created_at = Column(DateTime, default=datetime.utcnow)
