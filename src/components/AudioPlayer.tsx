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
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ title, audioUrl, image, duration }) => {
  const { playAudio, currentAudio, isPlaying } = useAudio();
  
  const isCurrentAudio = currentAudio?.audioUrl === audioUrl;
  
  const handlePlay = () => {
    playAudio(title, audioUrl, image);
  };

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden hover:border-brand/30 transition-all duration-300 group max-w-56">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-20 object-cover" />
        <div className="absolute inset-0 flex items-center justify-center">
          <Button
            onClick={handlePlay}
            className={`rounded-full w-12 h-12 p-0 ${
              isCurrentAudio && isPlaying 
                ? 'bg-brand/80 hover:bg-brand text-black' 
                : 'bg-brand hover:bg-brand/90 text-black'
            }`}
          >
            <Play className="w-4 h-4 ml-0.5" />
          </Button>
        </div>
        <div className="absolute bottom-1 right-1 bg-black/80 text-white text-xs px-1 py-0.5 rounded">
          {duration}
        </div>
      </div>
      
      <div className="p-2">
        <h3 className="font-semibold text-xs text-foreground group-hover:text-brand transition-colors duration-300 line-clamp-2 leading-tight">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default AudioPlayer;