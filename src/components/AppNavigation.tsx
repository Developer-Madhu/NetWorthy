
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Briefcase, Users, Award, LayoutDashboard, User } from "lucide-react";
import { useUser } from "@/context/UserContext";
import { motion } from "framer-motion";

export const AppNavigation = () => {
  const location = useLocation();
  const { stats } = useUser();
  
  const navItems = [
    { name: "Dashboard", icon: LayoutDashboard, path: "/" },
    { name: "Jobs", icon: Briefcase, path: "/jobs" },
    { name: "People", icon: Users, path: "/people" },
    { name: "Leaderboard", icon: Award, path: "/leaderboard" },
    { name: "Profile", icon: User, path: "/profile" },
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <>
      {/* Mobile Navigation */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="fixed bottom-0 left-0 right-0 backdrop-blur-lg bg-background/80 dark:bg-gaming-background/90 border-t border-gaming-border z-50 px-2 pt-2 pb-safe sm:hidden"
      >
        <div className="grid grid-cols-5 gap-1">
          {navItems.map((nav) => {
            const isActive = location.pathname === nav.path;
            return (
              <Link key={nav.name} to={nav.path}>
                <Button
                  variant={isActive ? "default" : "ghost"}
                  className={`w-full flex-col h-auto py-2 px-1 ${isActive ? 'bg-gaming-gradient text-white' : 'hover:bg-gaming-primary/10'}`}
                >
                  <nav.icon className={`h-5 w-5 ${isActive ? 'animate-pulse-glow' : ''}`} />
                  <span className="text-xs">{nav.name}</span>
                </Button>
              </Link>
            );
          })}
        </div>
      </motion.div>

      {/* Desktop Navigation */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="hidden sm:flex sm:flex-col border-r border-gaming-border h-screen w-64 backdrop-blur-md bg-sidebar/80 dark:bg-gaming-background/40 fixed z-30"
      >
        <div className="p-6">
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gaming-gradient">SwipeConnect</h2>
          <div className="mt-2 flex items-center">
            <motion.div 
              className="flex items-center justify-center h-8 w-8 rounded-full bg-gaming-gradient"
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Award className="h-4 w-4 text-white" />
            </motion.div>
            <div className="ml-2 text-sm">
              <span className="font-medium">Level {stats.level}</span>
              <div className="w-32 bg-gaming-border/30 rounded-full h-1.5">
                <div className="bg-gaming-gradient h-1.5 rounded-full" style={{ width: `${(stats.points % 100)}%` }}></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="px-3 flex-1">
          <motion.div
            className="flex flex-col space-y-1"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {navItems.map((nav, index) => {
              const isActive = location.pathname === nav.path;
              return (
                <motion.div key={nav.name} variants={item}>
                  <Link to={nav.path}>
                    <Button
                      variant={isActive ? "default" : "ghost"}
                      className={`w-full justify-start h-10 px-4 relative overflow-hidden ${
                        isActive ? 'bg-gaming-gradient text-white' : 'hover:bg-gaming-primary/10'
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          className="absolute inset-0 bg-gaming-primary/10"
                          animate={{
                            background: [
                              "rgba(139, 92, 246, 0.1)",
                              "rgba(139, 92, 246, 0.2)",
                              "rgba(139, 92, 246, 0.1)",
                            ],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                          }}
                        />
                      )}
                      <nav.icon className="h-5 w-5 mr-2" />
                      <span className="text-sm">{nav.name}</span>
                    </Button>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
        
        <div className="p-4 border-t border-gaming-border">
          <div className="flex items-center space-x-2">
            <motion.div 
              className="h-10 w-10 bg-gaming-gradient rounded-full flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <User className="h-5 w-5 text-white" />
            </motion.div>
            <div>
              <div className="font-medium">Pro Gamer</div>
              <div className="text-xs text-muted-foreground">
                {stats.points} points
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};
