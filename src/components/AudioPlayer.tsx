import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface AudioPlayerProps {
  title: string;
  audioUrl: string;
  image: string;
  author: {
    name: string;
    avatar: string;
  };
  duration: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ title, audioUrl, image, author, duration }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [audioDuration, setAudioDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

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
      setAudioDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (audioRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const newTime = (clickX / rect.width) * audioDuration;
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden hover:border-brand/30 transition-all duration-300 group">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-32 object-cover" />
        <div className="absolute top-3 right-3">
          <Button
            onClick={togglePlay}
            className="bg-brand hover:bg-brand/90 text-black rounded-full w-8 h-8 p-0"
          >
            {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3 ml-0.5" />}
          </Button>
        </div>
      </div>
      
      <div className="p-3 space-y-2">
        <h3 className="font-semibold text-xs text-foreground group-hover:text-brand transition-colors duration-300 line-clamp-2">
          {title}
        </h3>
        
        <div className="text-xs text-muted-foreground">
          <p>{duration}</p>
        </div>

        {/* Audio Progress Bar */}
        <div className="space-y-1">
          <div 
            className="w-full h-1 bg-muted rounded-full cursor-pointer overflow-hidden"
            onClick={handleSeek}
          >
            <div 
              className="h-full bg-brand transition-all duration-100"
              style={{ width: `${audioDuration ? (currentTime / audioDuration) * 100 : 0}%` }}
            />
          </div>
          
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>{formatTime(currentTime)}</span>
            <span>{audioDuration ? formatTime(audioDuration) : duration}</span>
          </div>
        </div>
      </div>

      <audio
        ref={audioRef}
        src={audioUrl}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => setIsPlaying(false)}
        preload="metadata"
      />
    </div>
  );
};

export default AudioPlayer;