# Simple Projects for CI/CD Practice

This repo contains two minimal apps to practice CI/CD pipelines:

- `backend` – FastAPI app with a couple of endpoints and pytest tests
- `frontend` – Static HTML/JS served by a tiny Node HTTP server with a trivial test

## Backend

- Run: `uvicorn app.main:app --reload --host 0.0.0.0 --port 8000`
- Test: `pytest -q`
- Docker: `docker build -t simple-backend backend && docker run --rm -p 8000:8000 simple-backend`

## Frontend

- Run: `npm --prefix frontend install && npm --prefix frontend start`
- Test: `npm --prefix frontend test`
- Docker: `docker build -t simple-frontend frontend && docker run --rm -p 5173:5173 simple-frontend`

## Connect frontend to backend

By default the frontend calls the backend at `http://localhost:8000`. If your backend runs elsewhere, set `window.API_BASE` in the browser console or inject it via a small inline script in `index.html` before `main.js`. 