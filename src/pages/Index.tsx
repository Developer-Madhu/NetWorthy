
import { AppNavigation } from "@/components/AppNavigation";
import { UserProvider } from "@/context/UserContext";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <UserProvider>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen flex flex-col sm:flex-row"
      >
        <AppNavigation />
        <motion.main 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex-1"
        >
          <Outlet />
        </motion.main>
      </motion.div>
    </UserProvider>
  );
};

export default Index;
