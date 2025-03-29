
import { AppNavigation } from "@/components/AppNavigation";
import { UserProvider } from "@/context/UserContext";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <UserProvider>
      <div className="min-h-screen bg-background overflow-hidden relative">
        {/* Background elements */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <motion.div 
            className="absolute top-10 left-10 w-64 h-64 rounded-full bg-gaming-primary/10 blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1], 
              opacity: [0.4, 0.6, 0.4] 
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-gaming-secondary/10 blur-3xl"
            animate={{ 
              scale: [1.2, 1, 1.2], 
              opacity: [0.5, 0.3, 0.5] 
            }}
            transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          />
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row relative z-10"
        >
          <AppNavigation />
          <motion.main 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex-1 glass-panel sm:ml-64 sm:m-4 sm:rounded-2xl overflow-auto"
          >
            <Outlet />
          </motion.main>
        </motion.div>
      </div>
    </UserProvider>
  );
};

export default Index;
