# Backend

This is the FastAPI backend with a dummy LangGraph workflow.

## Setup

1. Create a virtual environment (optional but recommended):
   ```bash
   python -m venv venv
   source venv/bin/activate
   ```

2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Run the development server:
   ```bash
   uvicorn main:app --reload
   ```

## Testing

Run tests with `pytest`:
```bash
pytest test_main.py
```

## API Endpoints

- `GET /health` - Health check endpoint
- `GET /api/workflow` - Runs the dummy LangGraph workflow and returns a message.
