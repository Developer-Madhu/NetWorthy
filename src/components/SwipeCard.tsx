
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Job, Profile } from "@/data/mockData";
import { motion } from "framer-motion";
import { CardHeader } from "./swipe/CardHeader";
import { JobCardContent } from "./swipe/JobCardContent";
import { ProfileCardContent } from "./swipe/ProfileCardContent";
import { CardFooter } from "./swipe/CardFooter";
import { SwipeIndicator } from "./swipe/SwipeIndicator";
import { useSwipeGesture } from "./swipe/useSwipeGesture";

interface SwipeCardProps {
  item: Job | Profile;
  type: "job" | "profile";
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
}

export const SwipeCard = ({ item, type, onSwipeLeft, onSwipeRight }: SwipeCardProps) => {
  const { toast } = useToast();
  const cardRef = useRef<HTMLDivElement>(null);
  const swipeThreshold = 100;
  
  const handleSuccessfulSwipeRight = () => {
    onSwipeRight();
    toast({
      title: "Match!",
      description: `You've matched with ${type === "job" ? (item as Job).title : (item as Profile).name}!`,
    });
  };
  
  const {
    offsetX,
    swipeDirection,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    handleSwipeLeft,
    handleSwipeRight,
    getSwipeStyles
  } = useSwipeGesture(
    cardRef, 
    swipeThreshold, 
    onSwipeLeft, 
    handleSuccessfulSwipeRight
  );

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="w-full"
    >
      <Card 
        ref={cardRef}
        className={`w-full max-w-md transition-all duration-300 relative overflow-hidden ${
          swipeDirection === "left" ? "translate-x-[-100vw]" : 
          swipeDirection === "right" ? "translate-x-[100vw]" : ""
        } neo-brutalism`}
        style={getSwipeStyles()}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleTouchStart as any}
      >
        {/* Right swipe indicator */}
        <SwipeIndicator 
          direction="right" 
          isVisible={offsetX > swipeThreshold/2} 
        />

        {/* Left swipe indicator */}
        <SwipeIndicator 
          direction="left" 
          isVisible={offsetX < -swipeThreshold/2} 
        />
        
        <CardHeader item={item} type={type} />

        {type === "job" ? (
          <JobCardContent job={item as Job} />
        ) : (
          <ProfileCardContent profile={item as Profile} />
        )}

        <CardFooter 
          onSkip={handleSwipeLeft}
          onConnect={handleSwipeRight}
        />
      </Card>
    </motion.div>
  );
};
