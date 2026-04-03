# LangGraph Orchestration Project

This project consists of a FastAPI backend and a Next.js frontend to orchestrate a LangGraph workflow.

## Project Structure

- `backend/` - FastAPI backend.
- `frontend/` - Next.js frontend.

## How to Run

### Backend

1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Create and activate a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Run the development server:
   ```bash
   uvicorn main:app --reload
   ```
   The backend will run on `http://127.0.0.1:8000`.

### Frontend

1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to `http://localhost:3000`.

## Features
- The frontend provides a simple UI to trigger the dummy LangGraph workflow.
- Clicking the "Trigger Workflow" button will hit the backend API at `http://127.0.0.1:8000/api/workflow` and display the result.