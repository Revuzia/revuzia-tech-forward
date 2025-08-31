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
        <div className={`absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded ${
          isLarge ? 'text-sm' : 'text-xs'
        }`}>
          {duration}
        </div>
      </div>
      
      <div className={`${isLarge ? 'p-4' : 'p-2'}`}>
        <h3 className={`font-semibold text-foreground group-hover:text-brand transition-colors duration-300 line-clamp-2 leading-tight ${
          isLarge ? 'text-lg' : 'text-xs'
        }`}>
          {title}
        </h3>
      </div>
    </div>
  );
};

export default AudioPlayer;