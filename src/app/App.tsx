import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LandingPage } from './components/LandingPage';
import { LetterPage } from './components/LetterPage';
import { RestaurantsPage } from './components/RestaurantsPage';

type Page = 'landing' | 'letter' | 'restaurants';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('landing');

  const handleNavigate = (page: 'letter' | 'restaurants') => {
    setCurrentPage(page);
  };

  const handleBack = () => {
    setCurrentPage('landing');
  };

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  const pageTransition = {
    duration: 0.5,
    ease: [0.4, 0.0, 0.2, 1]
  };

  return (
    <div className="size-full">
      <AnimatePresence mode="wait">
        {currentPage === 'landing' && (
          <motion.div
            key="landing"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={pageTransition}
          >
            <LandingPage onNavigate={handleNavigate} />
          </motion.div>
        )}
        {currentPage === 'letter' && (
          <motion.div
            key="letter"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={pageTransition}
          >
            <LetterPage onBack={handleBack} />
          </motion.div>
        )}
        {currentPage === 'restaurants' && (
          <motion.div
            key="restaurants"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={pageTransition}
          >
            <RestaurantsPage onBack={handleBack} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}