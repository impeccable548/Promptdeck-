import { motion } from "framer-motion";
import { useState } from "react";
import { User, PenSquare, Globe, PlusCircle } from "lucide-react";

const Dashboard = ({ setCurrentPage }) => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john@example.com",
    plan: "Free Tier",
    prompts: [
      { id: 1, title: "Creative Blog Writer", desc: "Generates blog ideas" },
      { id: 2, title: "Product Ad Generator", desc: "Writes product ad copy" },
    ],
  });

  const handleUpgrade = () => {
    alert("Upgrade feature coming soon 🚀");
  };

  return (
    <div className="min-h-screen p-8 text-white bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Greeting Section */}
      <motion.div
        className="mb-10 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-4xl font-extrabold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          Welcome back, {user.name.split(" ")[0]} 👋
        </h1>
        <p className="text-slate-400 text-lg">
          Manage your prompts, profile, and explore new opportunities.
        </p>
      </motion.div>

      {/* Card Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Profile Card */}
        <motion.div
          className="p-6 bg-slate-900/70 rounded-2xl border border-slate-800 hover:border-blue-500 transition cursor-pointer shadow-lg backdrop-blur-sm"
          whileHover={{ scale: 1.05 }}
          onClick={() => alert("Open Profile Modal coming soon 🧑‍💻")}
        >
          <div className="flex items-center justify-between mb-4">
            <User className="text-blue-400" size={30} />
            <button
              onClick={handleUpgrade}
              className="text-xs bg-blue-500/20 px-3 py-1 rounded-lg text-blue-300 hover:bg-blue-500/30 transition"
            >
              {user.plan}
            </button>
          </div>
          <h2 className="text-xl font-bold mb-2">Your Profile</h2>
          <p className="text-slate-400 text-sm">
            Name: {user.name} <br />
            Email: {user.email}
          </p>
        </motion.div>

        {/* My Prompts Card */}
        <motion.div
          className="p-6 bg-slate-900/70 rounded-2xl border border-slate-800 hover:border-purple-500 transition cursor-pointer shadow-lg backdrop-blur-sm"
          whileHover={{ scale: 1.05 }}
          onClick={() => setCurrentPage("explore")}
        >
          <div className="flex items-center justify-between mb-4">
            <PenSquare className="text-purple-400" size={30} />
            <span className="text-xs bg-purple-500/20 px-3 py-1 rounded-lg text-purple-300">
              {user.prompts.length} Prompts
            </span>
          </div>
          <h2 className="text-xl font-bold mb-2">My Prompts</h2>
          <ul className="space-y-2 text-sm text-slate-400">
            {user.prompts.map((p) => (
              <li
                key={p.id}
                className="border-b border-slate-800 pb-1 hover:text-purple-300 transition"
              >
                {p.title} — <span className="text-slate-500">{p.desc}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Create Prompt */}
        <motion.div
          className="p-6 bg-slate-900/70 rounded-2xl border border-slate-800 hover:border-green-500 transition cursor-pointer shadow-lg backdrop-blur-sm"
          whileHover={{ scale: 1.05 }}
          onClick={() => setCurrentPage("editor")}
        >
          <div className="flex items-center justify-between mb-4">
            <PlusCircle className="text-green-400" size={30} />
          </div>
          <h2 className="text-xl font-bold mb-2">Create New Prompt</h2>
          <p className="text-slate-400 text-sm">
            Jump right into the editor to build a new prompt from scratch.
          </p>
        </motion.div>

        {/* Marketplace */}
        <motion.div
          className="p-6 bg-slate-900/70 rounded-2xl border border-slate-800 hover:border-cyan-500 transition cursor-pointer shadow-lg backdrop-blur-sm"
          whileHover={{ scale: 1.05 }}
          onClick={() => setCurrentPage("explore")}
        >
          <div className="flex items-center justify-between mb-4">
            <Globe className="text-cyan-400" size={30} />
          </div>
          <h2 className="text-xl font-bold mb-2">Explore Marketplace</h2>
          <p className="text-slate-400 text-sm">
            Browse, buy, or sell creative prompts shared by others.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;