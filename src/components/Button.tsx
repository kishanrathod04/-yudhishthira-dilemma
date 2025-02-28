import { ButtonHTMLAttributes } from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
}

export default function Button({ children, variant = 'primary', className = '', ...props }: ButtonProps) {
  const baseStyles = "px-6 py-3 rounded-lg font-medium transition-all duration-300 ancient-text";
  
  const variants = {
    primary: "bg-gradient-to-r from-primary to-primary-light text-background hover:from-primary-light hover:to-primary",
    secondary: "bg-background-light text-primary hover:bg-background border border-primary",
    outline: "border-2 border-primary text-primary hover:bg-primary/10"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}