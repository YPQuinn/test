# Project Specification

## What do you want to build?

用langraph做一个可插拔、可编排、可分级的agent工作流，用web页面

## How do you consider the project is success?

web交互agent插拔、编排和分级，可以在web页面看到整个工作流的工作情况

## Tech Stack (Proposed)
- **Backend**: FastAPI (Python)
- **Core Workflow**: LangGraph & LangChain
- **Frontend**: Next.js / React (TypeScript)
- **Communication**: REST API for management, WebSockets/SSE for real-time workflow status
