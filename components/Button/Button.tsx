// Dependencies
import Link, { LinkProps } from 'next/link';
import { motion } from 'framer-motion';
import clsx from 'clsx';

// Styles
import styles from './Button.module.css';

// Types
type ButtonTypes = {
  href?: string;
  text?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  className?: string;
};

export default function Button({
  className,
  href,
  text,
  type,
  ...props
}: ButtonTypes) {
  // Concatenate class names
  className = clsx(
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aquamarine',
    styles['neon-button'],
    className
  );

  if (href) {
    return (
      <motion.a
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        transition={{ duration: 0.2, loop: Infinity, ease: 'easeIn' }}
        href={href}
        type={type}
        className={className}
        {...props}
      >
        {text}
      </motion.a>
    );
  }
  return (
    <motion.button
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      transition={{ duration: 0.2, loop: Infinity, ease: 'easeIn' }}
      type={type}
      className={className}
      {...props}
    >
      {text}
    </motion.button>
  );
}
