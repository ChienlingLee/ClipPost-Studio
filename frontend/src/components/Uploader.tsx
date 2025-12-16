import React, { useState } from "react";

export default function Uploader() {
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState("");

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      setMessage("Please choose a file first");
      return;
    }

    // 👇 this line reads your environment variable from Render
    const base = import.meta.env.VITE_API_BASE_URL?.replace(/\/$/, "") || "";
    const form = new FormData();
    form.append("file", file);

    setMessage("Uploading...");
    try {
      const res = await fetch(`${base}/api/upload`, {
        method: "POST",
        body: form,
      });
      const text = await res.text();
      setMessage(`Status ${res.status}: ${text}`);
    } catch (err) {
      setMessage(`Error: ${err}`);
    }
  };

  return (
    <form onSubmit={handleUpload}>
      <input
        type="file"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
      />
      <button type="submit">Upload</button>
      <div>{message}</div>
    </form>
  );
}
