"""
This file is responsible for setting up the FastAPI application and adding middleware for CORS
(Cross-Origin Resource Sharing)
"""

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from src.routers.download_data_endp import router as download_data_router

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "http://localhost:80",
        "http://127.0.0.1:80",
        "http://localhost:8000",
        "http://127.0.0.1:8000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(download_data_router)
