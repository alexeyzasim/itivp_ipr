import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ExcursionPage from "./pages/ExcursionPage"; 
import "./styles/global.css";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";

const App = () => {
  return (
    <Router>
      <div className="app">
        <main className="main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/excursion" element={<ExcursionPage />} />
            <Route path="/PrivacyPolicy" element={<PrivacyPolicyPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
