import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Movies from "./Components/Movies";
import Topstories from "./Components/TopStories";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/" element={<Topstories />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
