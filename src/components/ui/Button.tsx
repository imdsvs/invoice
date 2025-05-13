import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  fullWidth?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  fullWidth = false,
  className = '',
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg';
  
  const variantStyles = {
    primary: 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg hover:shadow-cyan-500/20 hover:scale-105',
    secondary: 'bg-gray-800 text-white hover:bg-gray-700',
    outline: 'bg-transparent border border-gray-600 text-gray-300 hover:border-cyan-400 hover:text-white',
    ghost: 'bg-transparent text-gray-300 hover:bg-gray-800 hover:text-white',
  };
  
  const sizeStyles = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-base px-4 py-2',
    lg: 'text-lg px-6 py-3',
  };
  
  const widthStyle = fullWidth ? 'w-full' : '';
  
  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;