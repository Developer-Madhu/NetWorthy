
import { SwipeDeck } from "@/components/SwipeDeck";
import { jobs } from "@/data/mockData";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const Jobs = () => {
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
          <Briefcase className="text-white" />
        </div>
        <h1 className="text-3xl font-bold gaming-text-glow">Find Jobs</h1>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="glass-panel p-4 mb-8 text-center"
      >
        <p className="text-muted-foreground font-medium">
          Swipe right to apply, or left to skip
        </p>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="relative"
      >
        {/* Decorative elements */}
        <div className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-gaming-primary/20 blur-xl animate-pulse z-0"></div>
        <div className="absolute -bottom-6 -right-6 w-16 h-16 rounded-full bg-gaming-secondary/20 blur-xl animate-pulse z-0"></div>
        
        <SwipeDeck items={jobs} type="job" />
      </motion.div>
    </motion.div>
  );
};

export default Jobs;
