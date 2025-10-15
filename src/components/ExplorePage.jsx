import { Search, Eye, Heart } from "lucide-react";

const ExplorePage = ({ mockPrompts, setSelectedPrompt, setCurrentPage }) => (
  <div className="min-h-screen bg-slate-950">
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Explore Prompts</h1>
        <p className="text-slate-400">Discover trending prompts from top creators</p>
      </div>

      {/* Search */}
      <div className="mb-8">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder="Search prompts..."
            className="w-full pl-12 pr-4 py-4 bg-slate-900 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
          />
        </div>
      </div>

      {/* Prompts Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockPrompts.map((prompt) => (
          <div
            key={prompt.id}
            onClick={() => { setSelectedPrompt(prompt); setCurrentPage("prompt-detail"); }}
            className="group p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 transition-all cursor-pointer"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                  {prompt.authorAvatar}
                </div>
                <div>
                  <div className="text-sm text-slate-400">{prompt.author}</div>
                </div>
              </div>
              {prompt.price > 0 && (
                <div className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-semibold">
                  ${prompt.price}
                </div>
              )}
            </div>

            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
              {prompt.title}
            </h3>
            <p className="text-slate-400 text-sm mb-4 line-clamp-2">{prompt.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {prompt.tags.map((tag, i) => (
                <span key={i} className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs">{tag}</span>
              ))}
            </div>

            <div className="flex items-center gap-4 text-sm text-slate-400 pt-4 border-t border-slate-800">
              <span className="flex items-center gap-1">
                <Eye className="w-4 h-4" /> {prompt.views}
              </span>
              <span className="flex items-center gap-1">
                <Heart className="w-4 h-4" /> {prompt.saves}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default ExplorePage;