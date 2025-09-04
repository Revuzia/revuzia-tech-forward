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
          <div className="flex items-center justify-center gap-4 px-4 py-3">
            {/* Play/Pause Button */}
            <Button
              onClick={togglePlay}
              className="bg-brand hover:bg-brand/90 text-black rounded-full w-10 h-10 p-0 flex-shrink-0"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
            </Button>

            {/* Current Time */}
            <span className="text-sm text-muted-foreground whitespace-nowrap">
              {formatTime(currentTime)}
            </span>

            {/* Progress Bar */}
            <div 
              className="w-48 h-1 bg-muted rounded-full cursor-pointer"
              onClick={handleSeek}
            >
              <div 
                className="h-full bg-brand rounded-full transition-all duration-100"
                style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
              />
            </div>

            {/* Total Duration */}
            <span className="text-sm text-muted-foreground whitespace-nowrap">
              {duration ? formatTime(duration) : '--:--'}
            </span>
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