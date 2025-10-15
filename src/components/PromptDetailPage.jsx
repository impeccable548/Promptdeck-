import { Eye, Heart } from "lucide-react";

const PromptDetailPage = ({ selectedPrompt, setCurrentPage }) => {
  if (!selectedPrompt) return null;

  return (
    <div className="min-h-screen bg-slate-950">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <button
          onClick={() => setCurrentPage("explore")}
          className="mb-6 text-slate-400 hover:text-white transition-colors flex items-center gap-2"
        >
          ← Back to Explore
        </button>

        <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                {selectedPrompt.authorAvatar}
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">{selectedPrompt.title}</h1>
                <div className="text-slate-400">by {selectedPrompt.author}</div>
              </div>
            </div>
            {selectedPrompt.price > 0 && (
              <div className="text-3xl font-bold text-blue-400">${selectedPrompt.price}</div>
            )}
          </div>

          {/* Description */}
          <p className="text-slate-300 mb-6">{selectedPrompt.description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {selectedPrompt.tags.map((tag, i) => (
              <span key={i} className="px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm">
                {tag}
              </span>
            ))}
          </div>

          {/* Stats */}
          <div className="flex items-center gap-6 text-slate-400 mb-8 pb-8 border-b border-slate-800">
            <span className="flex items-center gap-2">
              <Eye className="w-5 h-5" /> {selectedPrompt.views} views
            </span>
            <span className="flex items-center gap-2">
              <Heart className="w-5 h-5" /> {selectedPrompt.saves} saves
            </span>
          </div>

          {/* Prompt Content */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-white mb-4">Prompt</h3>
            <div className="p-6 bg-slate-950 border border-slate-800 rounded-xl">
              <code className="text-slate-300 whitespace-pre-wrap">{selectedPrompt.content}</code>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4">
            {selectedPrompt.price > 0 ? (
              <button className="flex-1 px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all">
                Purchase for ${selectedPrompt.price}
              </button>
            ) : (
              <button className="flex-1 px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all">
                Copy Prompt
              </button>
            )}
            <button className="px-6 py-4 bg-slate-800 text-white rounded-xl font-semibold hover:bg-slate-700 transition-all flex items-center gap-2">
              <Heart className="w-5 h-5" /> Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromptDetailPage;