import { motion } from "motion/react";
import { Play, Filter, Search } from "lucide-react";

const NARRATORS = [
  {
    id: 1,
    name: "Elias Thorne",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop",
    specialties: ["Sci-Fi", "Fantasy", "Thriller"],
    accent: "British RP",
    voiceType: "Deep, Gravelly, Authoritative"
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
    specialties: ["Romance", "YA", "Literary Fiction"],
    accent: "American (Standard)",
    voiceType: "Warm, Expressive, Youthful"
  },
  {
    id: 3,
    name: "Marcus Vance",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
    specialties: ["Non-Fiction", "Business", "History"],
    accent: "American (Midwest)",
    voiceType: "Clear, Engaging, Professional"
  },
  {
    id: 4,
    name: "Elena Rostova",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=400&auto=format&fit=crop",
    specialties: ["Mystery", "Horror", "Historical Fiction"],
    accent: "Eastern European",
    voiceType: "Mysterious, Smooth, Intense"
  },
  {
    id: 5,
    name: "David Chen",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
    specialties: ["LitRPG", "Sci-Fi", "Comedy"],
    accent: "American (West Coast)",
    voiceType: "Energetic, Versatile, Character-driven"
  },
  {
    id: 6,
    name: "Olivia Sterling",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
    specialties: ["Historical Romance", "Cozy Mystery"],
    accent: "British (Posh)",
    voiceType: "Elegant, Witty, Soothing"
  }
];

export function Narrators() {
  return (
    <div className="min-h-screen pt-24 pb-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">Voices That Bring <br/><span className="text-gold-500 italic">Stories to Life</span></h1>
          <p className="text-xl text-zinc-400">
            Browse our curated roster of SAG-AFTRA professionals, Audie Award winners, and rising stars. Find the perfect voice for your manuscript.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-12 items-center justify-between bg-studio-900 p-4 rounded-2xl border border-studio-800">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
            <input 
              type="text" 
              placeholder="Search by name, genre, or accent..." 
              className="w-full bg-studio-950 border border-studio-700 rounded-xl pl-10 pr-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors"
            />
          </div>
          <div className="flex gap-4 w-full md:w-auto overflow-x-auto hide-scrollbar">
            <button className="flex items-center gap-2 px-4 py-3 rounded-xl bg-studio-950 border border-studio-700 text-zinc-300 hover:border-gold-500 whitespace-nowrap">
              <Filter className="w-4 h-4" /> Genre
            </button>
            <button className="flex items-center gap-2 px-4 py-3 rounded-xl bg-studio-950 border border-studio-700 text-zinc-300 hover:border-gold-500 whitespace-nowrap">
              <Filter className="w-4 h-4" /> Accent
            </button>
            <button className="flex items-center gap-2 px-4 py-3 rounded-xl bg-studio-950 border border-studio-700 text-zinc-300 hover:border-gold-500 whitespace-nowrap">
              <Filter className="w-4 h-4" /> Gender
            </button>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {NARRATORS.map((narrator, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              key={narrator.id} 
              className="bg-studio-900 rounded-3xl overflow-hidden border border-studio-800 group hover:border-gold-500/50 transition-colors"
            >
              <div className="relative h-64 overflow-hidden">
                <img src={narrator.image} alt={narrator.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-studio-900 via-studio-900/20 to-transparent"></div>
                <button className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-gold-500 text-studio-950 flex items-center justify-center shadow-lg hover:bg-gold-400 transition-colors hover:scale-110">
                  <Play className="w-5 h-5 ml-1" />
                </button>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-2xl font-bold text-white">{narrator.name}</h3>
                  <p className="text-gold-400 text-sm font-medium">{narrator.accent}</p>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <p className="text-sm text-zinc-400 mb-2">Voice Type</p>
                  <p className="text-white font-medium">{narrator.voiceType}</p>
                </div>
                <div>
                  <p className="text-sm text-zinc-400 mb-2">Specialties</p>
                  <div className="flex flex-wrap gap-2">
                    {narrator.specialties.map(spec => (
                      <span key={spec} className="px-3 py-1 rounded-full bg-studio-800 text-xs text-zinc-300 border border-studio-700">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
