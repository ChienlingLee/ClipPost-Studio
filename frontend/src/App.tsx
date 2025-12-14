import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Upload from "./pages/Upload";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Upload />} />
      </Routes>
    </Router>
  );
}

export default App;
