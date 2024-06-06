from fastapi import FastAPI, Depends, Request
from typing import Union

from schemas.apartment import Apartment

app = FastAPI()


@app.get('/')
async def get_apart(id_apart : Union[int, None] = None):
    if id_apart:
        return id_apart
    return "Ничего"