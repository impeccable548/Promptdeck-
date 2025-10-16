import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

const LoginModal = ({ onClose, setIsLoggedIn, setUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleLogin = () => {
    if (!name.trim() || !email.trim()) return;
    setUser({ name, email });
    setIsLoggedIn(true);
    onClose();
  };

  return (
    <Transition appear show={true} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-90"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-90"
          >
            <Dialog.Panel className="bg-slate-900 border border-slate-700 rounded-2xl p-6 w-full max-w-md shadow-lg text-center">
              <Dialog.Title className="text-2xl font-semibold text-white mb-4">
                Sign in to PromptDeck
              </Dialog.Title>

              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name..."
                className="w-full p-3 mb-3 rounded-xl bg-slate-800 border border-slate-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email..."
                className="w-full p-3 mb-4 rounded-xl bg-slate-800 border border-slate-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                onClick={handleLogin}
                className="w-full py-3 bg-blue-600 rounded-xl text-white font-semibold hover:bg-blue-500 transition"
              >
                Continue
              </button>

              <button
                onClick={onClose}
                className="mt-3 text-slate-400 hover:text-slate-200 text-sm"
              >
                Cancel
              </button>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default LoginModal;