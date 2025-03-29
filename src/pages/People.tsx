
import { SwipeDeck } from "@/components/SwipeDeck";
import { profiles } from "@/data/mockData";
import { motion } from "framer-motion";

const People = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto p-4 pb-20 sm:pb-4 max-w-xl"
    >
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-3xl font-bold mb-6 text-center"
      >
        Connect with People
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-muted-foreground text-center mb-8"
      >
        Swipe right to connect, or left to skip
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <SwipeDeck items={profiles} type="profile" />
      </motion.div>
    </motion.div>
  );
};

export default People;
