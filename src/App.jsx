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
  const [user, setUser] = useState({ name: "", email: "" });

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        setUser={setUser}
      />

      {/* Conditional rendering of pages */}
      {!isLoggedIn && currentPage === "landing" && <LandingPage />}

      {isLoggedIn && currentPage === "dashboard" && <Dashboard user={user} />}
      {isLoggedIn && currentPage === "editor" && <PromptEditor />}
      {isLoggedIn && currentPage === "explore" && (
        <ExplorePage
          mockPrompts={mockPrompts}
          setSelectedPrompt={setSelectedPrompt}
          setCurrentPage={setCurrentPage}
        />
      )}
      {isLoggedIn && currentPage === "prompt-detail" && (
        <PromptDetailPage
          selectedPrompt={selectedPrompt}
          setCurrentPage={setCurrentPage}
        />
      )}
      {isLoggedIn && currentPage === "pricing" && <PricingPage />}
    </div>
  );
};

export default App;