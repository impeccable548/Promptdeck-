const PricingPage = () => {
  const plans = [
    {
      name: "Free",
      price: 0,
      features: ["10 prompts", "Public visibility only", "Community support", "Basic analytics"],
    },
    {
      name: "Pro",
      price: 9,
      popular: true,
      features: ["Unlimited prompts", "All visibility options", "Priority support", "Advanced analytics", "Custom branding"],
    },
    {
      name: "Creator",
      price: 29,
      features: ["Everything in Pro", "5% commission (vs 15%)", "Early access to features", "Dedicated support", "API access"],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">Choose Your Plan</h1>
          <p className="text-xl text-slate-400">Start free, upgrade when you're ready</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div key={i} className={`p-8 rounded-2xl border ${plan.popular ? 'bg-gradient-to-b from-blue-500/10 to-purple-500/10 border-blue-500' : 'bg-slate-900/50 border-slate-800'}`}>
              {plan.popular && (
                <div className="inline-block px-3 py-1 bg-blue-500 text-white rounded-full text-sm font-semibold mb-4">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-white">${plan.price}</span>
                <span className="text-slate-400">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3 text-slate-300">
                    <div className="w-5 h-5 bg-blue-500/20 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 rounded-xl font-semibold transition-all ${plan.popular ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:shadow-lg hover:shadow-blue-500/50' : 'bg-slate-800 text-white hover:bg-slate-700'}`}>
                {plan.price === 0 ? 'Get Started' : 'Upgrade Now'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPage;