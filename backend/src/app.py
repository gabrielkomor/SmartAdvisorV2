"""
This file is responsible for setting up the FastAPI application and adding middleware for CORS
(Cross-Origin Resource Sharing)
"""

from fastapi import FastAPI
from fastapi import Request
from fastapi import HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

from src.routers.download_data_endp import router as download_data_router

app = FastAPI()


@app.exception_handler(Exception)
async def global_exception_handler(_request: Request, _exc: Exception) -> JSONResponse:
    """
    This function is responsible for handling global exceptions.
    :param request: request
    :type request: Request
    :param exc: exception
    :type exc: Exception
    :return: json object
    :rtype: JSONResponse
    """
    return JSONResponse(
        status_code=500,
        content={
            "error": "Internal Server Error",
            "message": "Unexpected server error occurred.",
        },
    )


@app.exception_handler(HTTPException)
async def http_exception_handler(_request: Request, exc: HTTPException) -> JSONResponse:
    """
    This function is responsible for handling HTTP exceptions.
    :param request: request
    :type request: Request
    :param exc: exception
    :type exc: HTTPException
    :return: json object
    :rtype: JSONResponse
    """
    return JSONResponse(
        status_code=exc.status_code,
        content={
            "error": exc.detail,
            "status": exc.status_code,
        },
    )


app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:4173",
        "http://127.0.0.1:4173",
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "http://localhost:80",
        "http://127.0.0.1:80",
        "http://localhost:8000",
        "http://127.0.0.1:8000",
        "http://192.168.1.111:5173",
        "http://192.168.1.111:5174",
        "http://localhost:8080",
        "http://127.0.0.1:8080",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(download_data_router)
