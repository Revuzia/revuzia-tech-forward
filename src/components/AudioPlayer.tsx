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

const AudioPlayer: React.FC<AudioPlayerProps> = ({ title, audioUrl, image, author, duration }) => {
  const { playAudio, currentAudio, isPlaying } = useAudio();
  
  const isCurrentAudio = currentAudio?.audioUrl === audioUrl;
  
  const handlePlay = () => {
    playAudio(title, audioUrl, image);
  };

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden hover:border-brand/30 transition-all duration-300 group max-w-sm">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-24 object-cover" />
        <div className="absolute top-2 right-2">
          <Button
            onClick={handlePlay}
            className={`rounded-full w-8 h-8 p-0 ${
              isCurrentAudio && isPlaying 
                ? 'bg-brand/80 hover:bg-brand text-black' 
                : 'bg-brand hover:bg-brand/90 text-black'
            }`}
          >
            <Play className="w-3 h-3 ml-0.5" />
          </Button>
        </div>
      </div>
      
      <div className="p-3">
        <h3 className="font-semibold text-sm text-foreground group-hover:text-brand transition-colors duration-300 line-clamp-3 leading-tight">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default AudioPlayer;