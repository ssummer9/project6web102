import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import FilmDetail from "./pages/FilmDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/films/:id" element={<FilmDetail />} />
    </Routes>
  );
}

export default App;

