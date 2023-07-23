import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import Question from "./pages/Question";
import Results from "./pages/Results";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/question" element={<Question />} />
        <Route path="/result" element={<Results />} />
      </Routes>
    </div>
  );
}

export default App;
