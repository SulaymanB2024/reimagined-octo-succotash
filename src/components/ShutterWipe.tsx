import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function ShutterWipe() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      if (link && link.getAttribute('href')?.startsWith('mailto:')) {
        e.preventDefault();
        setIsActive(true);
        setTimeout(() => {
          window.location.href = link.getAttribute('href')!;
          setTimeout(() => setIsActive(false), 500); // Revert after sending
        }, 1200); // Wait for shutter to close
      }
    };
    
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <AnimatePresence>
      {isActive && (
        <div className="fixed inset-0 z-[200] pointer-events-none flex flex-col">
          <motion.div 
            className="w-full h-1/2 bg-ink"
            initial={{ y: '-100%' }}
            animate={{ y: '0%' }}
            exit={{ y: '-100%' }}
            transition={{ type: 'tween', ease: [0.76, 0, 0.24, 1], duration: 0.8 }}
          />
          <motion.div 
            className="w-full h-1/2 bg-ink"
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            exit={{ y: '100%' }}
            transition={{ type: 'tween', ease: [0.76, 0, 0.24, 1], duration: 0.8 }}
          />
        </div>
      )}
    </AnimatePresence>
  );
}
