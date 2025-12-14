import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./index.css";
import Upload from "./pages/Upload";

function Home() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>ClipPost Studio</h1>
      <p style={{ color: "#555", marginBottom: "1rem" }}>
        Welcome! Use the navigation to open the Upload page.
      </p>
      <Link to="/upload" style={{ color: "#2563eb", textDecoration: "underline" }}>
        Go to Upload
      </Link>
    </div>
  );
}

function AppLayout() {
  return (
    <div className="min-h-screen" style={{ background: "#f9fafb" }}>
      <header style={{ background: "#fff", borderBottom: "1px solid #e5e7eb" }}>
        <div style={{ maxWidth: 960, margin: "0 auto", padding: "0.75rem 1rem", display: "flex", gap: "1rem" }}>
          <Link to="/" style={{ fontWeight: 600, color: "#111827" }}>ClipPost Studio</Link>
          <Link to="/upload" style={{ color: "#2563eb" }}>Upload</Link>
        </div>
      </header>
      <main style={{ maxWidth: 960, margin: "0 auto", padding: "1.5rem 1rem" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<Upload />} />
        </Routes>
      </main>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  </React.StrictMode>
);
