from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import json

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message": "Campus MCP Backend Running"}

@app.get("/library")
def library():
    with open("data/books.json", "r") as file:
        return json.load(file)

@app.get("/events")
def events():
    with open("data/events.json", "r") as file:
        return json.load(file)

@app.get("/academics")
def academics():
    with open("data/academics.json", "r") as file:
        return json.load(file)

@app.get("/profile")
def profile():
    with open("data/profile.json", "r") as file:
        return json.load(file)