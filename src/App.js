import "./App.css";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchPage from "./SearchPage";

function App() {
  return (
    // BEM
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/search" element={<SearchPage /> }
          ></Route>
        </Routes>

        
      </Router>
    </div>
  );
}

export default App;
