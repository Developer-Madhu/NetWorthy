
import { SwipeDeck } from "@/components/SwipeDeck";
import { profiles } from "@/data/mockData";
import { motion } from "framer-motion";
import { Users } from "lucide-react";

const People = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto p-4 pb-20 sm:pb-4 max-w-xl"
    >
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="flex items-center justify-center gap-3 mb-6"
      >
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gaming-gradient shadow-lg">
          <Users className="text-white" />
        </div>
        <h1 className="text-3xl font-bold gaming-text-glow">Connect with People</h1>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="glass-panel p-4 mb-8 text-center"
      >
        <p className="text-muted-foreground font-medium">
          Swipe right to connect, or left to skip
        </p>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="relative"
      >
        {/* Decorative elements */}
        <div className="absolute -top-6 -right-6 w-12 h-12 rounded-full bg-gaming-secondary/20 blur-xl animate-pulse z-0"></div>
        <div className="absolute -bottom-6 -left-6 w-16 h-16 rounded-full bg-gaming-primary/20 blur-xl animate-pulse z-0"></div>
        
        <SwipeDeck items={profiles} type="profile" />
      </motion.div>
    </motion.div>
  );
};

export default People;
