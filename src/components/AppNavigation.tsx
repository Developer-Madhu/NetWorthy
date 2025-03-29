
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Briefcase, Users, Award, LayoutDashboard, User } from "lucide-react";
import { useUser } from "@/context/UserContext";

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

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t px-2 pt-2 pb-safe sm:relative sm:flex sm:flex-col sm:border-r sm:h-screen sm:w-64 sm:border-t-0">
      <div className="hidden sm:block p-4 mb-2">
        <h2 className="text-lg font-bold">SwipeConnect</h2>
        <div className="text-sm text-muted-foreground flex items-center mt-1">
          <Award className="h-4 w-4 mr-1" /> Level {stats.level} • {stats.points} pts
        </div>
      </div>
      <div className="grid grid-cols-5 gap-1 sm:flex sm:flex-col sm:space-y-1 sm:px-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link key={item.name} to={item.path}>
              <Button
                variant={isActive ? "default" : "ghost"}
                className="w-full flex-col h-auto py-2 px-1 sm:flex-row sm:justify-start sm:h-10 sm:px-4"
              >
                <item.icon className="h-5 w-5 sm:mr-2" />
                <span className="text-xs sm:text-sm">{item.name}</span>
              </Button>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
