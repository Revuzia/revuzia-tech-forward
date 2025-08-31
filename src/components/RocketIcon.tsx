import React from 'react';

interface RocketIconProps {
  className?: string;
  style?: React.CSSProperties;
}

const RocketIcon: React.FC<RocketIconProps> = ({ className = "", style = {} }) => {
  return (
    <svg 
      viewBox="0 0 120 40" 
      className={`${className}`}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main rocket body */}
      <ellipse cx="70" cy="20" rx="35" ry="12" fill="#10B981" stroke="#059669" strokeWidth="1"/>
      
      {/* Rocket nose cone */}
      <ellipse cx="105" cy="20" rx="15" ry="8" fill="#059669"/>
      
      {/* Cockpit window */}
      <ellipse cx="85" cy="18" rx="12" ry="6" fill="#E5F7F0" fillOpacity="0.8" stroke="#059669" strokeWidth="1"/>
      
      {/* Wing/stabilizer top */}
      <path d="M45 12 L35 8 L50 15 Z" fill="#10B981" stroke="#059669" strokeWidth="1"/>
      
      {/* Wing/stabilizer bottom */}
      <path d="M45 28 L35 32 L50 25 Z" fill="#10B981" stroke="#059669" strokeWidth="1"/>
      
      {/* Engine/thruster */}
      <ellipse cx="35" cy="20" rx="8" ry="10" fill="#059669"/>
      
      {/* Engine glow/exhaust */}
      <ellipse cx="27" cy="20" rx="5" ry="6" fill="#34D399" fillOpacity="0.7"/>
      <ellipse cx="22" cy="20" rx="3" ry="4" fill="#6EE7B7" fillOpacity="0.9"/>
      
      {/* Revuzia text */}
      <text x="65" y="24" fontFamily="Arial, sans-serif" fontSize="8" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">
        Revuzia
      </text>
      
      {/* Detail lines on body */}
      <line x1="50" y1="15" x2="90" y2="15" stroke="#059669" strokeWidth="0.5" opacity="0.6"/>
      <line x1="50" y1="25" x2="90" y2="25" stroke="#059669" strokeWidth="0.5" opacity="0.6"/>
    </svg>
  );
};

export default RocketIcon;