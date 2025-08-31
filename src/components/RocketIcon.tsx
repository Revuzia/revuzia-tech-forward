import React from 'react';
import rocketImage from '@/assets/revuzia-rocket.png';

interface RocketIconProps {
  className?: string;
  style?: React.CSSProperties;
}

const RocketIcon: React.FC<RocketIconProps> = ({ className = "", style = {} }) => {
  return (
    <img 
      src={rocketImage} 
      alt="Revuzia Rocket" 
      className={`w-10 h-10 object-contain ${className}`}
      style={style}
    />
  );
};

export default RocketIcon;