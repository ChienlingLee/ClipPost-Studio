from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# --- CORS configuration ---
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://clippost-studio.onrender.com",  # your frontend domain
        "http://localhost:5173"                  # local dev (optional)
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

# --- Health check endpoint ---
@app.get("/api/health")
async def health():
    return {"ok": True}

# --- Upload endpoint ---
@app.post("/api/upload")
async def upload(file: UploadFile = File(...)):
    content = await file.read()
    size = len(content)
    # ⚠️ NOTE: Render’s disk is temporary, so we don’t save the file permanently.
    # For now, we just return its metadata.
    return {
        "id": 123,
        "filename": file.filename,
        "size": size,
        "message": "Upload received successfully!"
    }
