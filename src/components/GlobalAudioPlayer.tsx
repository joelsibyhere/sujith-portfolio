import { useAudio } from "@/hooks/useAudio";
import { cn } from "@/lib/utils";

export function GlobalAudioPlayer() {
  const { currentTrack, isPlaying, progress, togglePlayPause, seek } = useAudio();

  if (!currentTrack) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-[60] animate-in slide-in-from-bottom-full duration-700 pointer-events-none">
      {/* 
        Container must be pointer-events-auto so it can be clicked, 
        but we wrap it in a pointer-events-none div so it doesn't block the screen edge.
      */}
      <div className="pointer-events-auto bg-[#0a0a0a]/90 backdrop-blur-xl border-t border-hairline px-6 py-4 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Track Info */}
        <div className="flex items-center gap-4 w-full md:w-1/3">
          <button 
            onClick={togglePlayPause}
            className="flex-shrink-0 w-10 h-10 rounded-full border border-hairline flex items-center justify-center text-ember hover:bg-ember hover:text-background transition-colors"
          >
            {isPlaying ? (
              <span className="w-3 h-3 border-x-2 border-current"></span>
            ) : (
              <span className="w-0 h-0 border-y-4 border-y-transparent border-l-6 border-l-current ml-1"></span>
            )}
          </button>
          
          <div className="flex flex-col min-w-0">
            <span className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-foreground truncate">
              {currentTrack.title}
            </span>
            <span className="text-[0.6rem] font-mono text-muted-foreground uppercase tracking-[0.1em] truncate">
              {currentTrack.artist}
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="flex items-center gap-4 w-full md:w-1/3">
          <div 
            className="relative flex-1 h-1 bg-white/10 rounded-full cursor-pointer group"
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const newProgress = (e.clientX - rect.left) / rect.width;
              seek(Math.max(0, Math.min(1, newProgress)));
            }}
          >
            <div 
              className="absolute left-0 top-0 h-full bg-ember rounded-full group-hover:bg-ember/80 transition-colors"
              style={{ width: `${progress * 100}%` }}
            />
          </div>
        </div>

        {/* Decorative Equilizer / Visualizer */}
        <div className="hidden md:flex items-center justify-end gap-1 w-1/3 opacity-50">
           {[...Array(8)].map((_, i) => (
             <div 
               key={i} 
               className="w-1 bg-ember/50 rounded-full"
               style={{ 
                 height: isPlaying ? `${Math.max(4, Math.random() * 16)}px` : '4px',
                 transition: 'height 0.2s ease'
               }}
             />
           ))}
        </div>
      </div>
    </div>
  );
}
