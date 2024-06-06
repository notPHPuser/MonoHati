from pydantic import BaseModel
from typing import Union

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
    living_area : float
    shared_bathroom : Union[bool, None] = None
    description : Union[str, None] = None
