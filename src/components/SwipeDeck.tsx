
import { useState, useEffect } from "react";
import { SwipeCard } from "./SwipeCard";
import { Job, Profile } from "@/data/mockData";
import { useUser } from "@/context/UserContext";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { motion, AnimatePresence } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";

interface SwipeDeckProps {
  items: (Job | Profile)[];
  type: "job" | "profile";
}

export const SwipeDeck = ({ items: initialItems, type }: SwipeDeckProps) => {
  const [items, setItems] = useState<(Job | Profile)[]>([...initialItems]);
  const [currentItem, setCurrentItem] = useState<Job | Profile | null>(null);
  const [remainingItems, setRemainingItems] = useState<(Job | Profile)[]>([]);
  const [matches, setMatches] = useState<(Job | Profile)[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { addPoints, updateStats } = useUser();
  const { toast } = useToast();

  useEffect(() => {
    // Simulate loading
    setIsLoading(true);
    
    // Shuffle the items randomly
    const timer = setTimeout(() => {
      const shuffled = [...initialItems].sort(() => 0.5 - Math.random());
      setRemainingItems(shuffled);
      if (shuffled.length > 0) {
        setCurrentItem(shuffled[0]);
      }
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [initialItems]);

  const handleSwipeLeft = () => {
    if (remainingItems.length <= 1) {
      setCurrentItem(null);
      toast({
        title: "No more cards",
        description: `You've viewed all available ${type}s. Check back later!`,
      });
      return;
    }

    const newRemainingItems = remainingItems.slice(1);
    setRemainingItems(newRemainingItems);
    setCurrentItem(newRemainingItems[0]);
    
    // Update stats
    addPoints(1);
    if (type === "job") {
      updateStats("jobsViewed", items.length - newRemainingItems.length);
    } else {
      updateStats("profilesViewed", items.length - newRemainingItems.length);
    }
  };

  const handleSwipeRight = () => {
    if (currentItem) {
      setMatches([...matches, currentItem]);
      
      // Award more points for a match
      addPoints(5);
      updateStats("matches", matches.length + 1);
      
      // Possibly award badges
      if (matches.length + 1 === 5) {
        toast({
          title: "Badge Unlocked!",
          description: "You've earned the 'Networking Star' badge for making 5 connections!",
        });
      }
    }
    
    handleSwipeLeft(); // Reuse the same logic for advancing to next card
  };

  if (isLoading) {
    return (
      <div className="w-full max-w-md mx-auto">
        <div className="mb-4 flex justify-between items-center">
          <Skeleton className="h-8 w-32" />
          <Skeleton className="h-8 w-24" />
        </div>
        <div className="w-full">
          <Skeleton className="h-[450px] w-full rounded-lg" />
        </div>
      </div>
    );
  }

  if (!currentItem) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center p-8 text-center"
      >
        <Badge className="mb-4">All caught up!</Badge>
        <h2 className="text-2xl font-bold mb-2">No more cards to view</h2>
        <p className="text-muted-foreground">
          You've gone through all available {type}s. Check back later for new opportunities!
        </p>
      </motion.div>
    );
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-4 flex justify-between items-center"
      >
        <Badge variant="outline">
          {remainingItems.length} more {type}s
        </Badge>
        {matches.length > 0 && (
          <Badge variant="secondary">{matches.length} matches</Badge>
        )}
      </motion.div>
      
      <AnimatePresence mode="wait">
        <SwipeCard 
          key={currentItem.id} 
          item={currentItem}
          type={type}
          onSwipeLeft={handleSwipeLeft}
          onSwipeRight={handleSwipeRight}
        />
      </AnimatePresence>
    </div>
  );
};
