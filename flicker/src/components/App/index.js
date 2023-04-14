import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <h1>test</h1>
      <Routes>
        <Route path="/" />
        <Route index element={<p>Enter a search to begin</p>} />
        <Route
          path="/search/:queryText"
          element={<p>Search results will come here</p>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
