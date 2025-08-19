const API_BASE = (window.API_BASE && typeof window.API_BASE === 'string') ? window.API_BASE : 'http://localhost:8000';

function renderJson(elementId, data) {
  const el = document.getElementById(elementId);
  el.textContent = JSON.stringify(data, null, 2);
}

async function getHealth() {
  const res = await fetch(`${API_BASE}/health`);
  const json = await res.json();
  renderJson('health-output', json);
}

async function getGreet() {
  const name = document.getElementById('name-input').value || 'World';
  const res = await fetch(`${API_BASE}/greet?name=${encodeURIComponent(name)}`);
  const json = await res.json();
  renderJson('greet-output', json);
}

window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('btn-health').addEventListener('click', getHealth);
  document.getElementById('btn-greet').addEventListener('click', getGreet);
}); 