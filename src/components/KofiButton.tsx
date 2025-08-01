import { useState } from 'react';
import { Coffee } from 'lucide-react';
import { Button } from '@/components/ui/button';

const KofiButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <Button
        onClick={() => window.open('https://ko-fi.com/revuzia', '_blank')}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="bg-[#ff5f5f] hover:bg-[#ff4747] text-white font-semibold py-2 px-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
      >
        <Coffee className="h-5 w-5" />
        {isHovered && <span className="whitespace-nowrap">Support us on Ko-fi</span>}
      </Button>
    </div>
  );
};

export default KofiButton;