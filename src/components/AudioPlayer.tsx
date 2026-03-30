import { Play, Pause, Volume2 } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { cn } from "../lib/utils";

interface AudioPlayerProps {
  title: string;
  author: string;
  narrator: string;
  coverUrl: string;
  audioUrl?: string;
  className?: string;
}

export function AudioPlayer({ title, author, narrator, coverUrl, className }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  
  // Simulated progress for demo
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((p) => {
          if (p >= 100) {
            setIsPlaying(false);
            return 0;
          }
          return p + 0.5;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const togglePlay = () => setIsPlaying(!isPlaying);

  return (
    <div className={cn("bg-studio-900 border border-studio-800 rounded-2xl p-4 flex items-center gap-6 shadow-2xl", className)}>
      <div className="relative w-24 h-24 shrink-0 rounded-xl overflow-hidden shadow-lg group cursor-pointer" onClick={togglePlay}>
        <img src={coverUrl} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          {isPlaying ? <Pause className="w-8 h-8 text-white" /> : <Play className="w-8 h-8 text-white ml-1" />}
        </div>
      </div>
      
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h4 className="text-white font-semibold truncate">{title}</h4>
            <p className="text-zinc-400 text-sm truncate">By {author}</p>
          </div>
          <div className="bg-studio-800 px-3 py-1 rounded-full flex items-center gap-2">
            <Volume2 className="w-3 h-3 text-gold-500" />
            <span className="text-xs text-zinc-300">Narrated by {narrator}</span>
          </div>
        </div>
        
        {/* Waveform Visualization (Simulated) */}
        <div className="h-8 flex items-end gap-[2px] mb-2 cursor-pointer relative" onClick={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = e.clientX - rect.left;
          setProgress((x / rect.width) * 100);
        }}>
          {Array.from({ length: 40 }).map((_, i) => {
            const height = Math.random() * 100;
            const isActive = (i / 40) * 100 <= progress;
            return (
              <div 
                key={i} 
                className={cn(
                  "flex-1 rounded-t-sm transition-all duration-300",
                  isActive ? "bg-gold-500" : "bg-studio-700"
                )}
                style={{ 
                  height: `${Math.max(15, height)}%`,
                  opacity: isPlaying ? 1 : 0.5
                }}
              />
            );
          })}
        </div>
        
        <div className="flex justify-between text-xs text-zinc-500 font-mono">
          <span>0:00</span>
          <span>0:30</span>
        </div>
      </div>
      
      <button 
        onClick={togglePlay}
        className="w-14 h-14 shrink-0 rounded-full bg-gold-500 text-studio-950 flex items-center justify-center hover:bg-gold-400 transition-colors shadow-[0_0_20px_rgba(245,158,11,0.3)]"
      >
        {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
      </button>
    </div>
  );
}
