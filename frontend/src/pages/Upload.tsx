import { useState } from "react";

export default function Upload() {
  const [fileName, setFileName] = useState("");

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h2 style={{ fontSize: "1.5rem", fontWeight: 600 }}>Upload a File</h2>
      <p style={{ color: "#555" }}>Choose any small audio or video file.</p>

      <input
        type="file"
        accept=".mp3,.wav,.mp4,.mov"
        onChange={handleFileChange}
        style={{ marginTop: "1rem" }}
      />

      {fileName && (
        <p style={{ marginTop: "1rem", color: "green" }}>
          Selected file: <strong>{fileName}</strong>
        </p>
      )}
    </div>
  );
}
