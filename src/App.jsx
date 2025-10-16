import { useState } from "react";
import Navbar from "./components/Navbar";
import ExplorePage from "./components/ExplorePage";
import PromptDetailPage from "./components/PromptDetailPage";
import PricingPage from "./components/PricingPage";
import LandingPage from "./components/LandingPage"; // assume exists
import Dashboard from "./components/Dashboard";     // assume exists
import PromptEditor from "./components/PromptEditor"; // assume exists
import mockPrompts from "./mockPrompts";            // your mock data

const App = () => {
const [currentPage, setCurrentPage] = useState("landing");
const [selectedPrompt, setSelectedPrompt] = useState(null);
const [isLoggedIn, setIsLoggedIn] = useState(false);

return (
<div className="min-h-screen bg-slate-950">
<Navbar  
currentPage={currentPage}  
setCurrentPage={setCurrentPage}  
isLoggedIn={isLoggedIn}  
setIsLoggedIn={setIsLoggedIn}  
/>
{currentPage === "landing" && <LandingPage />}
{currentPage === "dashboard" && <Dashboard />}
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
