import { useState } from "react";
import Navbar from "./components/Navbar";
import ExplorePage from "./components/ExplorePage";
import PromptDetailPage from "./components/PromptDetailPage";
import PricingPage from "./components/PricingPage";
import LandingPage from "./components/LandingPage";
import Dashboard from "./components/Dashboard";
import PromptEditor from "./components/PromptEditor";
import mockPrompts from "./mockPrompts";

const App = () => {
  const [currentPage, setCurrentPage] = useState("landing");
  const [selectedPrompt, setSelectedPrompt] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // NEW: store user info (for name + email from login modal)
  const [userData, setUserData] = useState({ name: "", email: "" });

  // Auto-redirect to dashboard after login
  const handleLoginSuccess = (data) => {
    setUserData(data);
    setIsLoggedIn(true);
    setCurrentPage("dashboard");
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        userData={userData}
        setUserData={setUserData}
      />

      {currentPage === "landing" && <LandingPage />}
      {currentPage === "dashboard" && <Dashboard userData={userData} />}
      {currentPage === "editor" && <PromptEditor />}
      {currentPage === "explore" && (
        <ExplorePage
          mockPrompts={mockPrompts}
          setSelectedPrompt={setSelectedPrompt}
          setCurrentPage={setCurrentPage}
        />
      )}
      {currentPage === "prompt-detail" && (
        <PromptDetailPage
          selectedPrompt={selectedPrompt}
          setCurrentPage={setCurrentPage}
        />
      )}
      {currentPage === "pricing" && <PricingPage />}
    </div>
  );
};

export default App;