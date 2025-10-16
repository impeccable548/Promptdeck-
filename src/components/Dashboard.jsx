import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Edit3, Trash2, User } from "lucide-react";

const Dashboard = () => {
  const [profile, setProfile] = useState({
    name: "ShadrX",
    plan: "Pro",
    bio: "Innovating the Future of Prompts 🚀",
  });

  const [prompts, setPrompts] = useState([
    { id: 1, title: "Creative Writing Booster", description: "Enhance your writing flow instantly." },
    { id: 2, title: "Marketing Pitch Wizard", description: "Generate catchy taglines and product ideas." },
  ]);

  const [selectedPrompt, setSelectedPrompt] = useState(null);
  const [showEditor, setShowEditor] = useState(false);
  const [newPrompt, setNewPrompt] = useState({ title: "", description: "" });

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
    <div className="min-h-screen bg-slate-950 text-white p-8 overflow-hidden">
      <motion.h1
        className="text-4xl font-extrabold mb-8 text-center bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Dashboard
      </motion.h1>

      {/* Profile Section */}
      <motion.div
        className="rounded-2xl bg-slate-900/50 p-6 mb-10 backdrop-blur-md border border-cyan-800/20 hover:border-cyan-400/40 transition-all duration-300 shadow-lg max-w-xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center gap-4">
          <div className="p-4 rounded-full bg-gradient-to-r from-cyan-600 to-blue-800">
            <User size={28} />
          </div>
          <div>
            <h2 className="text-xl font-semibold">{profile.name}</h2>
            <p className="text-sm text-slate-400">Plan: {profile.plan}</p>
          </div>
        </div>
        <p className="mt-3 text-slate-300">{profile.bio}</p>
        <button
          onClick={() => setProfile({ ...profile, plan: profile.plan === "Pro" ? "Ultimate" : "Pro" })}
          className="mt-4 px-4 py-2 bg-cyan-600 hover:bg-cyan-500 rounded-lg text-sm font-semibold transition-all"
        >
          Upgrade Plan
        </button>
      </motion.div>

      {/* Prompt List */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Your Prompts</h2>
        <button
          onClick={() => setShowEditor(true)}
          className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 px-4 py-2 rounded-lg font-semibold transition-all"
        >
          <Plus size={18} /> New Prompt
        </button>
      </div>

      <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {prompts.map((prompt) => (
            <motion.div
              key={prompt.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => setSelectedPrompt(prompt)}
              className="cursor-pointer rounded-2xl bg-slate-900/60 border border-cyan-700/20 hover:border-cyan-400/40 p-5 backdrop-blur-lg hover:scale-[1.02] transition-all duration-300"
            >
              <h3 className="text-lg font-semibold">{prompt.title}</h3>
              <p className="text-slate-400 mt-2">{prompt.description}</p>
              <div className="flex gap-3 mt-4">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeletePrompt(prompt.id);
                  }}
                  className="text-red-400 hover:text-red-300"
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
            className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-slate-900/80 p-8 rounded-2xl w-[90%] max-w-lg border border-cyan-500/30 shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <h2 className="text-2xl font-bold mb-3">{selectedPrompt.title}</h2>
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
            className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50"
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
              <h2 className="text-2xl font-bold mb-4">Add New Prompt</h2>
              <input
                type="text"
                placeholder="Prompt Title"
                value={newPrompt.title}
                onChange={(e) => setNewPrompt({ ...newPrompt, title: e.target.value })}
                className="w-full p-3 mb-3 rounded-lg bg-slate-800 text-white focus:ring-2 focus:ring-cyan-500 outline-none"
              />
              <textarea
                placeholder="Prompt Description"
                value={newPrompt.description}
                onChange={(e) => setNewPrompt({ ...newPrompt, description: e.target.value })}
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