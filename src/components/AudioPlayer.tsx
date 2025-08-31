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
  const { playAudio, currentAudio, isPlaying } = useAudio();
  
  const isCurrentAudio = currentAudio?.audioUrl === audioUrl;
  
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
        <div className="absolute inset-0 flex items-center justify-center">
          <Button
            onClick={handlePlay}
            className={`rounded-full p-0 ${
              isLarge ? 'w-16 h-16' : 'w-12 h-12'
            } ${
              isCurrentAudio && isPlaying 
                ? 'bg-brand/80 hover:bg-brand text-black' 
                : 'bg-brand hover:bg-brand/90 text-black'
            }`}
          >
            <Play className={`${isLarge ? 'w-6 h-6' : 'w-4 h-4'} ml-0.5`} />
          </Button>
        </div>
      </div>
      
      <div className={`${isLarge ? 'p-4 pb-2' : 'p-2 pb-1'}`}>
        <h3 className={`font-semibold text-foreground group-hover:text-brand transition-colors duration-300 line-clamp-2 leading-tight ${
          isLarge ? 'text-lg mb-3' : 'text-xs mb-2'
        }`}>
          {title}
        </h3>
      </div>
      
      {/* Media Player Control Bar */}
      <div className={`bg-background/50 border-t border-border/50 ${isLarge ? 'px-4 py-3' : 'px-2 py-2'}`}>
        <div className="flex items-center gap-2">
          <Button
            onClick={handlePlay}
            size="sm"
            className={`rounded-full p-0 ${isLarge ? 'w-8 h-8' : 'w-6 h-6'} ${
              isCurrentAudio && isPlaying 
                ? 'bg-brand/80 hover:bg-brand text-black' 
                : 'bg-brand hover:bg-brand/90 text-black'
            }`}
          >
            <Play className={`${isLarge ? 'w-4 h-4' : 'w-3 h-3'} ml-0.5`} />
          </Button>
          
          <div className="flex-1 flex items-center gap-2">
            <span className={`text-muted-foreground ${isLarge ? 'text-xs' : 'text-[10px]'}`}>
              0:00
            </span>
            
            {/* Progress Bar */}
            <div className="flex-1 h-1 bg-muted rounded-full overflow-hidden">
              <div className="w-0 h-full bg-brand rounded-full transition-all duration-300"></div>
            </div>
            
            <span className={`text-muted-foreground ${isLarge ? 'text-xs' : 'text-[10px]'}`}>
              {duration}
            </span>
          </div>
          
          {/* Volume indicator */}
          <div className="w-1 h-1 bg-brand rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;