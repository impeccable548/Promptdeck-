const PromptEditor = () => (
  <div className="p-8">
    <h1 className="text-3xl font-bold text-white mb-4">Create a New Prompt</h1>
    <textarea className="w-full h-64 p-4 rounded-xl bg-slate-900 text-white border border-slate-800" placeholder="Write your prompt here..." />
    <button className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-xl font-semibold">Save Prompt</button>
  </div>
);

export default PromptEditor;