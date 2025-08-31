import React from 'react';
import { Play, Pause } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
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
  const { playAudio, currentAudio, isPlaying, currentTime, duration: audioDuration, handleSeek } = useAudio();
  
  const isCurrentAudio = currentAudio?.audioUrl === audioUrl;
  
  const handlePlay = () => {
    playAudio(title, audioUrl, image);
  };

  const handleSliderChange = (value: number[]) => {
    if (isCurrentAudio && handleSeek) {
      handleSeek(value[0]);
    }
  };

  const progress = isCurrentAudio && audioDuration > 0 ? (currentTime / audioDuration) * 100 : 0;

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden hover:border-brand/30 transition-all duration-300 group w-full">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="absolute inset-0 flex items-center justify-center">
          <Button
            onClick={handlePlay}
            className={`rounded-full w-16 h-16 p-0 ${
              isCurrentAudio && isPlaying 
                ? 'bg-brand/80 hover:bg-brand text-black' 
                : 'bg-brand hover:bg-brand/90 text-black'
            }`}
          >
            {isCurrentAudio && isPlaying ? (
              <Pause className="w-6 h-6" />
            ) : (
              <Play className="w-6 h-6 ml-1" />
            )}
          </Button>
        </div>
        <div className="absolute bottom-2 right-2 bg-black/80 text-white text-sm px-2 py-1 rounded">
          {duration}
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-lg text-foreground group-hover:text-brand transition-colors duration-300 line-clamp-2 mb-3">
          {title}
        </h3>
        
        {isCurrentAudio && (
          <div className="space-y-2">
            <Slider
              value={[progress]}
              onValueChange={handleSliderChange}
              max={100}
              step={0.1}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>{Math.floor(currentTime / 60)}:{(Math.floor(currentTime % 60)).toString().padStart(2, '0')}</span>
              <span>{Math.floor(audioDuration / 60)}:{(Math.floor(audioDuration % 60)).toString().padStart(2, '0')}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AudioPlayer;