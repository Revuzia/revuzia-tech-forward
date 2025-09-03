import React, { useState, useEffect } from 'react';

const FlyingRocket = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animationType, setAnimationType] = useState<'straight' | 'diagonal' | 'loop'>('straight');

  useEffect(() => {
    const triggerAnimation = () => {
      // Random animation type
      const animations = ['straight', 'diagonal', 'loop'] as const;
      const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
      setAnimationType(randomAnimation);
      setIsVisible(true);

      // Hide after animation completes
      setTimeout(() => {
        setIsVisible(false);
      }, 10000); // 10 second animation
    };

    // Initial trigger after 2 seconds
    const initialTimeout = setTimeout(triggerAnimation, 2000);

    // Repeat every 15 seconds
    const interval = setInterval(triggerAnimation, 15000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  const getAnimationClass = () => {
    switch (animationType) {
      case 'straight':
        return 'animate-fly-straight';
      case 'diagonal':
        return 'animate-fly-diagonal';
      case 'loop':
        return 'animate-fly-loop';
      default:
        return 'animate-fly-straight';
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      <div className={`rocket-container ${getAnimationClass()}`}>
        <div className="relative flex items-center">
          {/* Rocket Image */}
          <img 
            src="/lovable-uploads/56c91f72-fb18-4db3-a531-02f29387ac71.png" 
            alt="Rocket" 
            className="w-20 h-20 md:w-24 md:h-24"
            style={{ 
              filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.3))',
              mixBlendMode: 'multiply' 
            }}
          />
          
          {/* REVUZIA Text */}
          <div className="absolute left-full ml-2 whitespace-nowrap">
            <span className="text-white font-bold text-lg md:text-xl font-poppins tracking-wider drop-shadow-lg">
              REVUZIA
            </span>
          </div>
        </div>
      </div>

      <style>{`
        .rocket-container {
          position: absolute;
        }

        /* Straight across animation */
        .animate-fly-straight {
          animation: fly-straight 8s linear forwards;
        }

        @keyframes fly-straight {
          0% {
            transform: translateX(-120px) translateY(40vh) rotate(0deg);
          }
          100% {
            transform: translateX(calc(100vw + 120px)) translateY(40vh) rotate(0deg);
          }
        }

        /* Diagonal animation */
        .animate-fly-diagonal {
          animation: fly-diagonal 10s linear forwards;
        }

        @keyframes fly-diagonal {
          0% {
            transform: translateX(-120px) translateY(20vh) rotate(25deg);
          }
          100% {
            transform: translateX(calc(100vw + 120px)) translateY(70vh) rotate(25deg);
          }
        }

        /* Loop-de-loop animation */
        .animate-fly-loop {
          animation: fly-loop 12s linear forwards;
        }

        @keyframes fly-loop {
          0% {
            transform: translateX(-120px) translateY(50vh) rotate(0deg);
          }
          15% {
            transform: translateX(20vw) translateY(50vh) rotate(0deg);
          }
          25% {
            transform: translateX(30vw) translateY(30vh) rotate(90deg);
          }
          35% {
            transform: translateX(40vw) translateY(20vh) rotate(180deg);
          }
          45% {
            transform: translateX(50vw) translateY(30vh) rotate(270deg);
          }
          55% {
            transform: translateX(60vw) translateY(50vh) rotate(360deg);
          }
          70% {
            transform: translateX(75vw) translateY(50vh) rotate(360deg);
          }
          100% {
            transform: translateX(calc(100vw + 120px)) translateY(50vh) rotate(360deg);
          }
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .rocket-container img {
            width: 16px;
            height: 16px;
          }
          
          .rocket-container span {
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  );
};

export default FlyingRocket;