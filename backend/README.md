# FastAPI Backend

## Run locally

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

Open http://localhost:8000/health

## Run tests

```bash
pytest -q
```

## Build and run with Docker

```bash
docker build -t simple-backend .
docker run --rm -p 8000:8000 simple-backend
``` 