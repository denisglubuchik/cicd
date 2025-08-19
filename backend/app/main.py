from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Simple CI/CD FastAPI")

app.add_middleware(
	CORSMiddleware,
	allow_origins=["*"],
	allow_credentials=True,
	allow_methods=["*"],
	allow_headers=["*"],
)

class GreetResponse(BaseModel):
	message: str


@app.get("/health")

def health() -> dict:
	return {"status": "ok"}


@app.get("/greet", response_model=GreetResponse)

def greet(name: str = "World") -> GreetResponse:
	return GreetResponse(message=f"Hello, {name}!") 