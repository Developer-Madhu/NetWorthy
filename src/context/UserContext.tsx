
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface UserStats {
  points: number;
  level: number;
  profileCompleteness: number;
  jobsViewed: number;
  profilesViewed: number;
  matches: number;
  badges: string[];
}

interface UserContextType {
  stats: UserStats;
  addPoints: (amount: number) => void;
  updateStats: (key: keyof Omit<UserStats, 'badges'>, value: number) => void;
  addBadge: (badge: string) => void;
}

const defaultStats: UserStats = {
  points: 100,
  level: 1,
  profileCompleteness: 70,
  jobsViewed: 0,
  profilesViewed: 0,
  matches: 0,
  badges: ['Newcomer', 'Profile Creator']
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [stats, setStats] = useState<UserStats>(defaultStats);

  const addPoints = (amount: number) => {
    setStats(prev => {
      const newPoints = prev.points + amount;
      const newLevel = Math.floor(newPoints / 100) + 1;
      
      return {
        ...prev,
        points: newPoints,
        level: newLevel
      };
    });
  };

  const updateStats = (key: keyof Omit<UserStats, 'badges'>, value: number) => {
    setStats(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const addBadge = (badge: string) => {
    setStats(prev => ({
      ...prev,
      badges: [...prev.badges, badge]
    }));
  };

  return (
    <UserContext.Provider value={{ stats, addPoints, updateStats, addBadge }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
