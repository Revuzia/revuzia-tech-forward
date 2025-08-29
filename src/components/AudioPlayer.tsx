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
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            onClick={togglePlay}
            className="bg-brand hover:bg-brand/90 text-black rounded-full p-4"
          >
            {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
          </Button>
        </div>
      </div>
      
      <div className="p-4 space-y-3">
        <h3 className="font-bold text-lg text-foreground group-hover:text-brand transition-colors duration-300 line-clamp-2">
          {title}
        </h3>
        
        <div className="flex items-center gap-3">
          <img src={author.avatar} alt={author.name} className="w-8 h-8 rounded-full" />
          <div className="text-sm text-muted-foreground">
            <p className="font-medium">{author.name}</p>
            <p>{duration}</p>
          </div>
        </div>

        {/* Audio Progress Bar */}
        <div className="space-y-2">
          <div 
            className="w-full h-2 bg-muted rounded-full cursor-pointer overflow-hidden"
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

        {/* Play Controls */}
        <div className="flex items-center justify-center gap-4 pt-2">
          <Button
            onClick={togglePlay}
            className="bg-brand hover:bg-brand/90 text-black font-medium px-6"
          >
            {isPlaying ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
            {isPlaying ? 'Pause' : 'Play'}
          </Button>
          <Volume2 className="w-5 h-5 text-muted-foreground" />
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