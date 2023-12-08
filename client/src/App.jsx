import { Routes, Route, BrowserRouter } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import HomePage from "./Components/HomePage";
import FormPage from "./Components/FormPage";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/form" element={<FormPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
