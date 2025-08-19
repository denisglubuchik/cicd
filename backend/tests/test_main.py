from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)


def test_health() -> None:
    response = client.get("/health")
    assert response.status_code == 200
    assert response.json() == {"status": "ok"}


def test_greet_default() -> None:
    response = client.get("/greet")
    assert response.status_code == 200
    assert response.json() == {"message": "Hello, World!"}


def test_greet_custom() -> None:
    response = client.get("/greet", params={"name": "CI"})
    assert response.status_code == 200
    assert response.json()["message"] == "Hello, CI!" 