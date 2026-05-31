export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      
      <h1 className="text-4xl font-bold text-cyan-400">
        π MOJAD GOOS
      </h1>

      <p className="text-gray-300 mt-2">
        Global Opportunity Operating System powered by AI + Pi Network
      </p>

      {/* CORE MODULES */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">

        <div className="p-4 bg-white/10 rounded-xl">JobNet</div>
        <div className="p-4 bg-white/10 rounded-xl">BusinessNet</div>
        <div className="p-4 bg-white/10 rounded-xl">InvestNet</div>
        <div className="p-4 bg-white/10 rounded-xl">ServiceNet</div>
        <div className="p-4 bg-white/10 rounded-xl">HealthNet</div>
        <div className="p-4 bg-white/10 rounded-xl">AgriNet</div>

      </div>

    </div>
  );
}
