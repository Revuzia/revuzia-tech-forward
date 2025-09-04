import React, { createContext, useContext, useState, useRef, ReactNode } from 'react';
import { Play, Pause, Volume2, VolumeX, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface AudioContextType {
  playAudio: (title: string, audioUrl: string, image: string) => void;
  currentAudio: {
    title: string;
    audioUrl: string;
    image: string;
  } | null;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  formatTime: (seconds: number) => string;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
};

interface AudioProviderProps {
  children: ReactNode;
}

export const AudioProvider: React.FC<AudioProviderProps> = ({ children }) => {
  const [currentAudio, setCurrentAudio] = useState<{
    title: string;
    audioUrl: string;
    image: string;
  } | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  const playAudio = (title: string, audioUrl: string, image: string) => {
    if (currentAudio?.audioUrl === audioUrl) {
      // Same audio, just toggle play/pause
      togglePlay();
    } else {
      // New audio
      setCurrentAudio({ title, audioUrl, image });
      setIsPlaying(true);
      setIsVisible(true);
    }
  };

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (audioRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const newTime = (clickX / rect.width) * duration;
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const closePlayer = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    setIsPlaying(false);
    setIsVisible(false);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <AudioContext.Provider value={{ playAudio, currentAudio, isPlaying, currentTime, duration, formatTime }}>
      {children}
      
      {/* Persistent Audio Player */}
      {currentAudio && isVisible && (
        <div className="fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-sm border-t border-border z-40">
          <div className="mx-auto px-4 py-2 md:py-3" style={{ 
            marginLeft: 'max(1rem, calc(80px + 1rem))', 
            marginRight: 'max(1rem, calc(64px + 1rem))',
            maxWidth: 'calc(100vw - max(2rem, calc(80px + 64px + 2rem)))'
          }}>
            <div className="flex items-center gap-2 md:gap-3">
              {/* Audio Info */}
              <div className="flex items-center gap-2 flex-1 min-w-0">
                <img 
                  src={currentAudio.image} 
                  alt={currentAudio.title}
                  className="w-8 h-8 md:w-10 md:h-10 rounded object-cover flex-shrink-0"
                />
                <div className="min-w-0 flex-1">
                  <h4 className="text-xs md:text-sm font-medium text-foreground truncate">
                    {currentAudio.title}
                  </h4>
                  {/* Time Display for Desktop */}
                  <div className="hidden md:flex items-center gap-2 text-xs text-muted-foreground">
                    <span>{formatTime(currentTime)}</span>
                    <span>/</span>
                    <span>{duration ? formatTime(duration) : '--:--'}</span>
                  </div>
                </div>
              </div>

              {/* Play/Pause Button */}
              <Button
                onClick={togglePlay}
                className="bg-brand hover:bg-brand/90 text-black rounded-full w-8 h-8 md:w-10 md:h-10 p-0 flex-shrink-0"
              >
                {isPlaying ? <Pause className="w-3 h-3 md:w-4 md:h-4" /> : <Play className="w-3 h-3 md:w-4 md:h-4 ml-0.5" />}
              </Button>

              {/* Close Button */}
              <Button
                onClick={closePlayer}
                variant="ghost"
                className="w-6 h-6 md:w-8 md:h-8 p-0 flex-shrink-0"
              >
                <X className="w-3 h-3 md:w-4 md:h-4" />
              </Button>
            </div>

            {/* Progress Bar - Mobile Only */}
            <div className="md:hidden mt-1">
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                <span>{formatTime(currentTime)}</span>
                <span className="flex-1"></span>
                <span>{duration ? formatTime(duration) : '--:--'}</span>
              </div>
              <div 
                className="w-full h-1 bg-muted rounded-full cursor-pointer"
                onClick={handleSeek}
              >
                <div 
                  className="h-full bg-brand rounded-full transition-all duration-100"
                  style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
                />
              </div>
            </div>
          </div>

          <audio
            ref={audioRef}
            src={currentAudio.audioUrl}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            onEnded={() => setIsPlaying(false)}
            preload="metadata"
            autoPlay={isPlaying}
          />
        </div>
      )}
    </AudioContext.Provider>
  );
};