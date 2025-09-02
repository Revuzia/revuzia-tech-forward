import React from 'react';
import { Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAudio } from '@/components/PersistentAudioPlayer';

interface AudioPlayerProps {
  title: string;
  audioUrl: string;
  image: string;
  author: {
    name: string;
    avatar: string;
  };
  duration: string;
  isLarge?: boolean;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ title, audioUrl, image, duration, isLarge = false }) => {
  const { playAudio, currentAudio, isPlaying, currentTime, duration: totalDuration, formatTime } = useAudio();
  
  const isCurrentAudio = currentAudio?.audioUrl === audioUrl;
  const progress = isCurrentAudio && totalDuration ? (currentTime / totalDuration) * 100 : 0;
  const displayCurrentTime = isCurrentAudio ? formatTime(currentTime) : "0:00";
  
  // Dynamic font size based on title length to maximize space usage within 2 lines
  const getFontSize = (titleLength: number, isLarge: boolean) => {
    if (!isLarge) return 'text-xs';
    
    if (titleLength <= 50) return 'text-lg';        // Large font for shorter titles
    if (titleLength <= 70) return 'text-base';      // Medium font for medium titles  
    if (titleLength <= 90) return 'text-sm';        // Smaller font for longer titles
    return 'text-xs';                                // Smallest font for very long titles
  };
  
  const handlePlay = () => {
    playAudio(title, audioUrl, image);
  };

  return (
    <div className={`bg-card border border-border rounded-lg overflow-hidden hover:border-brand/30 transition-all duration-300 group ${
      isLarge ? 'w-full' : 'max-w-56'
    }`}>
      <div className="relative">
        <img 
          src={image} 
          alt={title} 
          className={`w-full object-cover ${isLarge ? 'h-48' : 'h-20'}`} 
        />
      </div>
      
      <div className={`${isLarge ? 'p-4' : 'p-2'} relative`}>
        <h3 className={`font-semibold text-foreground group-hover:text-brand transition-colors duration-300 leading-tight text-center line-clamp-2 ${
          getFontSize(title.length, isLarge)
        } ${isLarge ? 'pr-12' : 'pr-10'}`}>
          {title}
        </h3>
        
        <Button
          onClick={handlePlay}
          className={`absolute top-2 right-2 rounded-full p-0 ${
            isLarge ? 'w-10 h-10' : 'w-8 h-8'
          } ${
            isCurrentAudio && isPlaying 
              ? 'bg-brand/80 hover:bg-brand text-black' 
              : 'bg-brand hover:bg-brand/90 text-black'
          }`}
        >
          <Play className={`${isLarge ? 'w-5 h-5' : 'w-3 h-3'} ml-0.5`} />
        </Button>
      </div>
    </div>
  );
};

export default AudioPlayer;