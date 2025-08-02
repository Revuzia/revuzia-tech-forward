import { useState } from 'react';
import { Coffee, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const KofiButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showDonationForm, setShowDonationForm] = useState(false);

  const handleDonateClick = () => {
    setShowDonationForm(true);
  };

  return (
    <>
      <div className="fixed bottom-4 left-4 z-[60]">
        <Button
          onClick={handleDonateClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="bg-brand hover:bg-brand/90 text-black font-semibold py-3 px-5 rounded-full shadow-xl border-2 border-white/20 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
        >
          <div className="relative">
            <Coffee className="h-6 w-6 text-black/80" />
            <Heart className="h-2.5 w-2.5 text-red-500 absolute top-1.5 left-1/2 transform -translate-x-1/2" fill="currentColor" />
          </div>
          {isHovered && (
            <svg className="h-4 w-4 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 14l5-5 5 5z"/>
            </svg>
          )}
          {isHovered && <span className="whitespace-nowrap text-black">Support us on Ko-fi</span>}
        </Button>
      </div>

      {/* Donation Modal */}
      {showDonationForm && (
        <div className="fixed inset-0 bg-black/50 z-[70] flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-xl font-bold text-black mb-4">Support Revuzia</h3>
            <p className="text-gray-600 mb-4">Your support helps us create better tech reviews and content!</p>
            <div className="grid grid-cols-2 gap-3 mb-4">
              <Button onClick={() => window.open('https://ko-fi.com/revuzia', '_blank')} className="bg-[#FF5E5B] hover:bg-[#FF5E5B]/90 text-white">
                $3
              </Button>
              <Button onClick={() => window.open('https://ko-fi.com/revuzia', '_blank')} className="bg-[#FF5E5B] hover:bg-[#FF5E5B]/90 text-white">
                $5
              </Button>
              <Button onClick={() => window.open('https://ko-fi.com/revuzia', '_blank')} className="bg-[#FF5E5B] hover:bg-[#FF5E5B]/90 text-white">
                $10
              </Button>
              <Button onClick={() => window.open('https://ko-fi.com/revuzia', '_blank')} className="bg-[#FF5E5B] hover:bg-[#FF5E5B]/90 text-white">
                Custom
              </Button>
            </div>
            <Button 
              onClick={() => setShowDonationForm(false)}
              variant="outline" 
              className="w-full"
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default KofiButton;