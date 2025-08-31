import React from 'react';

interface RocketIconProps {
  className?: string;
  style?: React.CSSProperties;
}

const RocketIcon: React.FC<RocketIconProps> = ({ className = "", style = {} }) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      className={`${className}`}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main rocket body */}
      <path 
        d="M30 70 L30 40 Q30 25 45 25 L55 25 Q70 25 70 40 L70 70 Q70 75 65 75 L35 75 Q30 75 30 70 Z" 
        fill="#10B981"
      />
      
      {/* Rocket nose cone */}
      <path 
        d="M45 25 Q50 15 55 25" 
        fill="#059669"
      />
      
      {/* Circular window */}
      <circle 
        cx="50" 
        cy="40" 
        r="8" 
        fill="#FFFFFF" 
        fillOpacity="0.9"
      />
      <circle 
        cx="50" 
        cy="40" 
        r="5" 
        fill="#10B981" 
        fillOpacity="0.3"
      />
      
      {/* Left fin */}
      <path 
        d="M30 60 L20 70 L30 70 Z" 
        fill="#059669"
      />
      
      {/* Right fin */}
      <path 
        d="M70 60 L80 70 L70 70 Z" 
        fill="#059669"
      />
      
      {/* Exhaust flames */}
      <path 
        d="M35 75 Q40 85 35 90 Q35 85 30 85 Q35 80 35 75" 
        fill="#34D399"
        fillOpacity="0.8"
      />
      <path 
        d="M50 75 Q50 90 45 95 Q50 90 55 95 Q50 90 50 75" 
        fill="#6EE7B7"
        fillOpacity="0.9"
      />
      <path 
        d="M65 75 Q60 85 65 90 Q65 85 70 85 Q65 80 65 75" 
        fill="#34D399"
        fillOpacity="0.8"
      />
      
      {/* Revuzia text */}
      <text 
        x="50" 
        y="62" 
        fontFamily="Arial, sans-serif" 
        fontSize="7" 
        fill="#FFFFFF" 
        fontWeight="bold" 
        textAnchor="middle"
      >
        Revuzia
      </text>
    </svg>
  );
};

export default RocketIcon;