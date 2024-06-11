from pydantic import BaseModel
from typing import Union, Annotated
from fastapi import Query

#писечки
# {
#     "id" : 1,
#     "name" : "popa",
#     "address" : "Colotushkino street",
#     "room_count" : 2,
#     "floor" : 8,
#     "absolute_area" : 50,
#     "living_area" : 40
# }

class Apartment(BaseModel):
    id : int
    name : str
    address : str
    room_count : int
    floor : int
    absolute_area : float
    living_area : float | None = None
    shared_bathroom : bool | None = None #одно и то же, разные виды записи
    description : Union[str, None] = None # болеее старенький вид(до python 3.10)
