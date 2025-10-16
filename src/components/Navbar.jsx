import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X, User } from "lucide-react";
import LoginModal from "./LoginModal";

const Navbar = ({
  currentPage,
  setCurrentPage,
  isLoggedIn,
  setIsLoggedIn,
  userData,
  setUserData,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserData({ name: "", email: "" });
    setCurrentPage("landing");
  };

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 bg-slate-950/70 backdrop-blur-md border-b border-slate-800 flex items-center justify-between px-6 py-4 z-50"
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Logo */}
        <h1
          className="text-2xl font-bold text-blue-400 cursor-pointer"
          onClick={() => setCurrentPage("landing")}
        >
          PromptDeck
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 text-slate-300">
          {["explore", "dashboard", "editor", "pricing"].map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`hover:text-blue-400 transition ${
                currentPage === page ? "text-blue-400" : ""
              }`}
            >
              {page.charAt(0).toUpperCase() + page.slice(1)}
            </button>
          ))}
        </div>

        {/* Login / User */}
        <div className="flex items-center gap-4">
          {!isLoggedIn ? (
            <button
              onClick={() => setShowLogin(true)}
              className="flex items-center gap-2 text-slate-300 hover:text-blue-400"
            >
              <User size={18} /> Login
            </button>
          ) : (
            <div className="flex items-center gap-3">
              <span className="text-slate-300 text-sm">
                {userData?.name || "User"}
              </span>
              <button
                onClick={handleLogout}
                className="text-red-400 hover:text-red-500 text-sm"
              >
                Logout
              </button>
            </div>
          )}

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-slate-300"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          className="fixed top-16 left-0 right-0 bg-slate-900/90 backdrop-blur-md p-4 flex flex-col items-center gap-4 md:hidden z-40"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {["explore", "dashboard", "editor", "pricing"].map((page) => (
            <button
              key={page}
              onClick={() => {
                setCurrentPage(page);
                setIsMenuOpen(false);
              }}
              className="text-slate-300 text-lg hover:text-blue-400"
            >
              {page.charAt(0).toUpperCase() + page.slice(1)}
            </button>
          ))}
        </motion.div>
      )}

      {/* Login Modal */}
      {showLogin && (
        <LoginModal
          onClose={() => setShowLogin(false)}
          setIsLoggedIn={setIsLoggedIn}
          setUserData={setUserData}
        />
      )}
    </>
  );
};

export default Navbar;