// Dependencies
import Link, { LinkProps } from 'next/link';
import { motion } from 'framer-motion';

// Styles
import styles from './Button.module.css';

// Types
type ButtonTypes = {
  href?: string;
  text?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
};

export default function Button({ href, text, type, ...props }: ButtonTypes) {
  if (href) {
    return (
      <motion.Link
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        transition={{ duration: 0.2, loop: Infinity, ease: 'easeIn' }}
        href={href}
        type={type}
        className={`${styles['neon-button']} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aquamarine`}
        {...props}
      >
        {text}
      </motion.Link>
    );
  }
  return (
    <motion.button
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      transition={{ duration: 0.2, loop: Infinity, ease: 'easeIn' }}
      type={type}
      className="neon-button focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aquamarine"
      {...props}
    >
      {text}
    </motion.button>
  );
}
