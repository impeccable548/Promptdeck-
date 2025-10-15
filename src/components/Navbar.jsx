import { useState } from "react";
import { Zap, User, Settings, LogOut, X, Menu } from "lucide-react";

const Navbar = ({ currentPage, setCurrentPage, isLoggedIn, setIsLoggedIn }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => setCurrentPage(isLoggedIn ? "dashboard" : "landing")}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">PromptDeck</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {isLoggedIn ? (
              <>
                <button onClick={() => setCurrentPage("dashboard")} className="text-slate-300 hover:text-white transition-colors">Dashboard</button>
                <button onClick={() => setCurrentPage("explore")} className="text-slate-300 hover:text-white transition-colors">Explore</button>
                <button onClick={() => setCurrentPage("pricing")} className="text-slate-300 hover:text-white transition-colors">Pricing</button>

                {/* Account Dropdown */}
                <div className="relative group">
                  <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 rounded-lg text-white hover:bg-slate-700 transition-colors">
                    <User className="w-4 h-4" />
                    <span>Account</span>
                  </button>
                  <div className="absolute right-0 mt-2 w-48 bg-slate-900 border border-slate-800 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                    <button className="w-full px-4 py-3 text-left text-slate-300 hover:bg-slate-800 rounded-t-xl transition-colors flex items-center gap-3">
                      <Settings className="w-4 h-4" /> Settings
                    </button>
                    <button
                      onClick={() => { setIsLoggedIn(false); setCurrentPage("landing"); }}
                      className="w-full px-4 py-3 text-left text-red-400 hover:bg-slate-800 rounded-b-xl transition-colors flex items-center gap-3"
                    >
                      <LogOut className="w-4 h-4" /> Sign Out
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <button onClick={() => setCurrentPage("explore")} className="text-slate-300 hover:text-white transition-colors">Explore</button>
                <button onClick={() => setCurrentPage("pricing")} className="text-slate-300 hover:text-white transition-colors">Pricing</button>
                <button
                  onClick={() => { setIsLoggedIn(true); setCurrentPage("dashboard"); }}
                  className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
                >
                  Sign In
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-white">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-slate-800 bg-slate-950">
          <div className="px-6 py-4 space-y-3">
            {isLoggedIn ? (
              <>
                <button onClick={() => { setCurrentPage("dashboard"); setIsMenuOpen(false); }} className="block w-full text-left text-slate-300 hover:text-white py-2">Dashboard</button>
                <button onClick={() => { setCurrentPage("explore"); setIsMenuOpen(false); }} className="block w-full text-left text-slate-300 hover:text-white py-2">Explore</button>
                <button onClick={() => { setCurrentPage("pricing"); setIsMenuOpen(false); }} className="block w-full text-left text-slate-300 hover:text-white py-2">Pricing</button>
                <button className="block w-full text-left text-slate-300 hover:text-white py-2">Settings</button>
                <button onClick={() => { setIsLoggedIn(false); setCurrentPage("landing"); setIsMenuOpen(false); }} className="block w-full text-left text-red-400 py-2">Sign Out</button>
              </>
            ) : (
              <>
                <button onClick={() => { setCurrentPage("explore"); setIsMenuOpen(false); }} className="block w-full text-left text-slate-300 hover:text-white py-2">Explore</button>
                <button onClick={() => { setCurrentPage("pricing"); setIsMenuOpen(false); }} className="block w-full text-left text-slate-300 hover:text-white py-2">Pricing</button>
                <button onClick={() => { setIsLoggedIn(true); setCurrentPage("dashboard"); setIsMenuOpen(false); }} className="block w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold text-center mt-4">Sign In</button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;