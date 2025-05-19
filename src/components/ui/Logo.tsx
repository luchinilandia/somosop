import React from 'react';
import { Shield } from 'lucide-react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <Shield 
        size={28} 
        className="text-primary-600 fill-secondary-700" 
        strokeWidth={1.5} 
      />
    </div>
  );
};

export default Logo;