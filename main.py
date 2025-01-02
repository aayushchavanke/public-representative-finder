from fastapi import FastAPI, HTTPException
from typing import List
from schema import Representative, RepresentativeUpdate
from db import representatives_db, add_or_update_rep

app = FastAPI()

@app.get("/representatives", response_model=List[Representative])
async def get_representatives(lat: float, lon: float):
    results = [
        rep for rep in representatives_db 
        if abs(rep.lat - lat) < 0.05 and abs(rep.lon - lon) < 0.05
    ]
    if not results:
        raise HTTPException(status_code=404, detail="No representatives found for this location")
    return results

@app.post("/representatives", response_model=Representative)
async def add_representative(rep: RepresentativeUpdate):
    updated_rep = add_or_update_rep(rep)
    return updated_rep
