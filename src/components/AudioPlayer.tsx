import React from 'react';
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
    
    if (titleLength <= 45) return 'text-xl';        // Extra large font for short titles
    if (titleLength <= 65) return 'text-lg';        // Large font for medium-short titles
    if (titleLength <= 85) return 'text-base';      // Medium font for medium-long titles  
    if (titleLength <= 105) return 'text-sm';       // Smaller font for long titles
    return 'text-xs';                                // Smallest font for very long titles
  };
  
  const handlePlay = () => {
    playAudio(title, audioUrl, image);
  };

  return (
    <div 
      onClick={handlePlay}
      className={`bg-card border rounded-lg overflow-hidden transition-all duration-300 group cursor-pointer ${
        isLarge ? 'w-full' : 'max-w-56'
      } ${
        isCurrentAudio && isPlaying 
          ? 'border-brand shadow-lg shadow-brand/20 bg-card/90' 
          : 'border-border hover:border-brand/30'
      }`}
    >
      <div className="relative">
        <img 
          src={image} 
          alt={title} 
          className={`w-full object-cover ${isLarge ? 'h-48' : 'h-20'}`} 
        />
        {/* Active indicator overlay */}
        {isCurrentAudio && isPlaying && (
          <div className="absolute inset-0 bg-brand/10 flex items-center justify-center">
            <div className="w-12 h-12 bg-brand/80 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-black rounded-full animate-pulse" />
            </div>
          </div>
        )}
      </div>
      
      <div className={`${isLarge ? 'p-4' : 'p-2'} relative`}>
        <h3 className={`font-semibold transition-colors duration-300 leading-tight text-center line-clamp-2 ${
          getFontSize(title.length, isLarge)
        } ${
          isCurrentAudio && isPlaying 
            ? 'text-brand' 
            : 'text-foreground group-hover:text-brand'
        }`}>
          {title}
        </h3>
      </div>
    </div>
  );
};

export default AudioPlayer;