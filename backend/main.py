from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Crypto Fraud Detection API is running!"}
