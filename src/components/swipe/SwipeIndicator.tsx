
import { ThumbsDown, ThumbsUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type SwipeIndicatorProps = {
  direction: "left" | "right";
  isVisible: boolean;
};

export const SwipeIndicator = ({ direction, isVisible }: SwipeIndicatorProps) => {
  if (!isVisible) return null;
  
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.9, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          className={`absolute ${direction === 'right' ? 'right-4' : 'left-4'} top-1/2 -translate-y-1/2 ${
            direction === 'right' 
              ? 'bg-gaming-gradient' 
              : 'bg-accent'
          } text-white p-4 rounded-full z-10 shadow-lg`}
        >
          {direction === 'right' ? <ThumbsUp className="h-6 w-6" /> : <ThumbsDown className="h-6 w-6" />}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
