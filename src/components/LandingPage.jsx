import { motion } from "framer-motion";
import { Sparkles, Rocket, Layers } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden text-center bg-slate-950">
      {/* Background glow */}
      <div className="absolute w-[600px] h-[600px] bg-blue-500/20 blur-[120px] rounded-full top-20 animate-pulse" />

      {/* Main hero content */}
      <motion.h1
        className="text-6xl md:text-7xl font-bold text-white z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to <span className="text-blue-400">PromptDeck</span>
      </motion.h1>

      <motion.p
        className="mt-4 text-xl text-slate-400 z-10 max-w-2xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        Discover, create, and share AI prompts that inspire creativity and power your projects.
      </motion.p>

      {/* Animated buttons */}
      <motion.div
        className="flex gap-6 mt-10 z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-2xl hover:bg-blue-500 transition-all shadow-lg hover:scale-105">
          <Rocket size={18} /> Explore Prompts
        </button>
        <button className="flex items-center gap-2 px-6 py-3 border border-slate-700 text-slate-300 rounded-2xl hover:bg-slate-800 transition-all hover:scale-105">
          <Layers size={18} /> Create Prompt
        </button>
      </motion.div>

      {/* Floating icon animation */}
      <motion.div
        className="absolute bottom-10 flex gap-3 text-slate-500"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <Sparkles size={18} />
        <p>Powering the Future of AI Creativity</p>
        <Sparkles size={18} />
      </motion.div>
    </div>
  );
};

export default LandingPage;