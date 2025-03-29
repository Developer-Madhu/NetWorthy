
import { useState, useEffect } from "react";
import { SwipeCard } from "./SwipeCard";
import { Job, Profile } from "@/data/mockData";
import { useUser } from "@/context/UserContext";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

interface SwipeDeckProps {
  items: (Job | Profile)[];
  type: "job" | "profile";
}

export const SwipeDeck = ({ items: initialItems, type }: SwipeDeckProps) => {
  const [items, setItems] = useState<(Job | Profile)[]>([...initialItems]);
  const [currentItem, setCurrentItem] = useState<Job | Profile | null>(null);
  const [remainingItems, setRemainingItems] = useState<(Job | Profile)[]>([]);
  const [matches, setMatches] = useState<(Job | Profile)[]>([]);
  const { addPoints, updateStats } = useUser();
  const { toast } = useToast();

  useEffect(() => {
    // Shuffle the items randomly
    const shuffled = [...initialItems].sort(() => 0.5 - Math.random());
    setRemainingItems(shuffled);
    if (shuffled.length > 0) {
      setCurrentItem(shuffled[0]);
    }
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

  if (!currentItem) {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center">
        <Badge className="mb-4">All caught up!</Badge>
        <h2 className="text-2xl font-bold mb-2">No more cards to view</h2>
        <p className="text-muted-foreground">
          You've gone through all available {type}s. Check back later for new opportunities!
        </p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="mb-4 flex justify-between items-center">
        <Badge variant="outline">
          {remainingItems.length} more {type}s
        </Badge>
        {matches.length > 0 && (
          <Badge variant="secondary">{matches.length} matches</Badge>
        )}
      </div>
      <SwipeCard 
        item={currentItem}
        type={type}
        onSwipeLeft={handleSwipeLeft}
        onSwipeRight={handleSwipeRight}
      />
    </div>
  );
};
