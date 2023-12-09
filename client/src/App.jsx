import { Routes, Route, BrowserRouter } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import HomePage from "./Components/HomePage";
import CreatePage from "./Components/CreatePage";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/create" element={<CreatePage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
