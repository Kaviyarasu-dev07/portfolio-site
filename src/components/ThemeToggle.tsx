import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.button
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      whileTap={{ scale: 0.9 }}
      style={{
        position: 'relative',
        width: '52px',
        height: '28px',
        borderRadius: '999px',
        border: 'none',
        cursor: 'pointer',
        padding: 0,
        background: isDark
          ? 'linear-gradient(135deg, #1e3a8a, #3b82f6)'
          : 'linear-gradient(135deg, #fbbf24, #f59e0b)',
        boxShadow: isDark
          ? '0 0 12px rgba(59,130,246,0.4), inset 0 1px 0 rgba(255,255,255,0.1)'
          : '0 0 12px rgba(251,191,36,0.5), inset 0 1px 0 rgba(255,255,255,0.3)',
        transition: 'background 0.4s ease, box-shadow 0.4s ease',
        flexShrink: 0,
      }}
    >
      {/* Track stars / rays (decorative dots inside track) */}
      {isDark && (
        <>
          <span style={{ position: 'absolute', top: '5px', right: '7px', width: '3px', height: '3px', borderRadius: '50%', background: 'rgba(255,255,255,0.6)' }} />
          <span style={{ position: 'absolute', top: '10px', right: '13px', width: '2px', height: '2px', borderRadius: '50%', background: 'rgba(255,255,255,0.4)' }} />
          <span style={{ position: 'absolute', top: '7px', right: '18px', width: '2px', height: '2px', borderRadius: '50%', background: 'rgba(255,255,255,0.3)' }} />
        </>
      )}

      {/* Thumb */}
      <motion.div
        layout
        animate={{ x: isDark ? 2 : 26 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        style={{
          position: 'absolute',
          top: '3px',
          width: '22px',
          height: '22px',
          borderRadius: '50%',
          background: '#ffffff',
          boxShadow: '0 2px 6px rgba(0,0,0,0.25)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {isDark ? (
            <motion.span
              key="moon"
              initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
              transition={{ duration: 0.2 }}
            >
              <Moon size={12} color="#1e3a8a" strokeWidth={2.5} />
            </motion.span>
          ) : (
            <motion.span
              key="sun"
              initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
              transition={{ duration: 0.2 }}
            >
              <Sun size={12} color="#f59e0b" strokeWidth={2.5} />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.button>
  );
};
