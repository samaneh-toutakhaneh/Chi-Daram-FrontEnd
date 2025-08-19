import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className={`${sizes[size]} bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg`}>
        <span className="text-white font-bold text-lg">چ</span>
      </div>
    </div>
  );
};

export default Logo;
