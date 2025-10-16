import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Trash2, User, Mail, Sparkles } from "lucide-react";

const Dashboard = ({ user }) => {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    plan: "Free",
    bio: "Just getting started with creativity 🌱",
  });

  const [prompts, setPrompts] = useState([
    {
      id: 1,
      title: "Creative Writing Booster",
      description: "Enhance your writing flow instantly.",
    },
    {
      id: 2,
      title: "Marketing Pitch Wizard",
      description: "Generate catchy taglines and product ideas.",
    },
  ]);

  const [selectedPrompt, setSelectedPrompt] = useState(null);
  const [showEditor, setShowEditor] = useState(false);
  const [newPrompt, setNewPrompt] = useState({ title: "", description: "" });

  useEffect(() => {
    if (user?.name) {
      setProfile((prev) => ({
        ...prev,
        name: user.name,
        email: user.email,
        bio: `Welcome back, ${user.name}! Let’s craft something amazing ✨`,
      }));
    }
  }, [user]);

  const handleAddPrompt = () => {
    if (!newPrompt.title.trim()) return;
    setPrompts([...prompts, { ...newPrompt, id: Date.now() }]);
    setNewPrompt({ title: "", description: "" });
    setShowEditor(false);
  };

  const handleDeletePrompt = (id) => {
    setPrompts(prompts.filter((p) => p.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white p-8 overflow-hidden">
      <motion.h1
        className="text-5xl font-extrabold mb-10 text-center bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Dashboard
      </motion.h1>

      {/* Profile Section */}
      <motion.div
        className="rounded-2xl bg-slate-900/50 p-6 mb-10 backdrop-blur-xl border border-cyan-800/20 hover:border-cyan-400/40 transition-all duration-300 shadow-lg max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center gap-4">
          <div className="p-4 rounded-full bg-gradient-to-r from-cyan-600 to-blue-700">
            <User size={28} />
          </div>
          <div>
            <h2 className="text-xl font-semibold">{profile.name}</h2>
            <p className="text-sm text-slate-400 flex items-center gap-1">
              <Mail size={14} /> {profile.email}
            </p>
            <p className="text-sm text-slate-400 mt-1">
              Plan:{" "}
              <span className="text-cyan-400 font-medium">{profile.plan}</span>
            </p>
          </div>
        </div>

        <p className="mt-3 text-slate-300">{profile.bio}</p>
        <div className="flex gap-3 mt-5">
          <button
            onClick={() =>
              setProfile({
                ...profile,
                plan: profile.plan === "Free" ? "Pro" : "Free",
              })
            }
            className="flex items-center gap-2 px-4 py-2 bg-cyan-600 hover:bg-cyan-500 rounded-lg text-sm font-semibold transition-all"
          >
            <Sparkles size={16} />{" "}
            {profile.plan === "Free" ? "Upgrade Plan" : "Downgrade"}
          </button>
        </div>
      </motion.div>

      {/* Prompt List */}
      <div className="flex justify-between items-center mb-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-cyan-400">Your Prompts</h2>
        <button
          onClick={() => setShowEditor(true)}
          className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 px-5 py-2 rounded-xl font-semibold transition-all"
        >
          <Plus size={18} /> New Prompt
        </button>
      </div>

      {/* Prompt Cards */}
      <motion.div
        layout
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        <AnimatePresence>
          {prompts.map((prompt) => (
            <motion.div
              key={prompt.id}
              layout
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setSelectedPrompt(prompt)}
              className="cursor-pointer rounded-2xl bg-slate-900/70 border border-cyan-700/30 hover:border-cyan-400/50 p-5 backdrop-blur-lg shadow-md hover:shadow-cyan-500/10 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-cyan-300">
                {prompt.title}
              </h3>
              <p className="text-slate-400 mt-2">{prompt.description}</p>
              <div className="flex justify-end mt-4">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeletePrompt(prompt.id);
                  }}
                  className="text-red-400 hover:text-red-300 transition"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Prompt Detail Modal */}
      <AnimatePresence>
        {selectedPrompt && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-lg flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-slate-900/90 p-8 rounded-2xl w-[90%] max-w-lg border border-cyan-500/30 shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <h2 className="text-2xl font-bold mb-3 text-cyan-300">
                {selectedPrompt.title}
              </h2>
              <p className="text-slate-400 mb-6">{selectedPrompt.description}</p>
              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setSelectedPrompt(null)}
                  className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-all"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    alert("Prompt published to Explore!");
                    setSelectedPrompt(null);
                  }}
                  className="px-4 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 transition-all"
                >
                  Publish
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Add Prompt Modal */}
      <AnimatePresence>
        {showEditor && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-lg flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-slate-900/90 p-8 rounded-2xl w-[90%] max-w-lg border border-cyan-500/30 shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <h2 className="text-2xl font-bold mb-4 text-cyan-300">
                Add New Prompt
              </h2>
              <input
                type="text"
                placeholder="Prompt Title"
                value={newPrompt.title}
                onChange={(e) =>
                  setNewPrompt({ ...newPrompt, title: e.target.value })
                }
                className="w-full p-3 mb-3 rounded-lg bg-slate-800 text-white focus:ring-2 focus:ring-cyan-500 outline-none"
              />
              <textarea
                placeholder="Prompt Description"
                value={newPrompt.description}
                onChange={(e) =>
                  setNewPrompt({ ...newPrompt, description: e.target.value })
                }
                className="w-full p-3 mb-4 rounded-lg bg-slate-800 text-white focus:ring-2 focus:ring-cyan-500 outline-none"
              />
              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setShowEditor(false)}
                  className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-all"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddPrompt}
                  className="px-4 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 transition-all"
                >
                  Save
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dashboard;