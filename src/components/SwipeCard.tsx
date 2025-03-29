
import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Job, Profile } from "@/data/mockData";
import { ChevronLeft, ChevronRight, ThumbsDown, ThumbsUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface SwipeCardProps {
  item: Job | Profile;
  type: "job" | "profile";
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
}

export const SwipeCard = ({ item, type, onSwipeLeft, onSwipeRight }: SwipeCardProps) => {
  const { toast } = useToast();
  const [swipeDirection, setSwipeDirection] = useState<"left" | "right" | null>(null);
  const [startX, setStartX] = useState(0);
  const [offsetX, setOffsetX] = useState(0);
  const swipeThreshold = 100;
  const cardRef = useRef<HTMLDivElement>(null);
  
  const handleTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
    if ('touches' in e) {
      setStartX(e.touches[0].clientX);
    } else {
      setStartX(e.clientX);
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const currentX = e.touches[0].clientX;
    const diff = currentX - startX;
    setOffsetX(diff);
  };
  
  const handleMouseMove = (e: MouseEvent) => {
    const diff = e.clientX - startX;
    setOffsetX(diff);
  };
  
  const handleMouseUp = () => {
    handleTouchEnd();
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  const handleTouchEnd = () => {
    if (offsetX > swipeThreshold) {
      handleSwipeRight();
    } else if (offsetX < -swipeThreshold) {
      handleSwipeLeft();
    } else {
      // Return to center if not swiped far enough
      setOffsetX(0);
    }
  };

  const handleSwipeLeft = () => {
    setSwipeDirection("left");
    setTimeout(() => {
      onSwipeLeft();
      setSwipeDirection(null);
      setOffsetX(0);
    }, 300);
  };

  const handleSwipeRight = () => {
    setSwipeDirection("right");
    setTimeout(() => {
      onSwipeRight();
      toast({
        title: "Match!",
        description: `You've matched with ${type === "job" ? (item as Job).title : (item as Profile).name}!`,
      });
      setSwipeDirection(null);
      setOffsetX(0);
    }, 300);
  };

  // Clean up event listeners
  useEffect(() => {
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

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
        className={`w-full max-w-md transition-all duration-300 ${swipeDirection === "left" ? "translate-x-[-100vw]" : swipeDirection === "right" ? "translate-x-[100vw]" : ""}`}
        style={{ 
          transform: `translateX(${offsetX}px) rotate(${offsetX / 20}deg)`, 
          opacity: 1 - Math.abs(offsetX) / 300,
          cursor: 'grab'
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleTouchStart as any}
      >
        {offsetX > swipeThreshold/2 && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2 bg-green-500 text-white p-3 rounded-full z-10 opacity-90">
            <ThumbsUp />
          </div>
        )}
        {offsetX < -swipeThreshold/2 && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 bg-red-500 text-white p-3 rounded-full z-10 opacity-90">
            <ThumbsDown />
          </div>
        )}
        
        <CardHeader className="relative">
          <div className="absolute top-4 right-4 bg-primary text-primary-foreground rounded-full px-3 py-1 text-sm font-medium">
            {type === "job" ? (item as Job).postedDate : `${(item as Profile).experience}+ yrs`}
          </div>
          <div className="h-36 rounded-t-lg bg-muted flex items-center justify-center mb-4">
            <img 
              src={type === "job" ? (item as Job).logo : (item as Profile).avatar} 
              alt={type === "job" ? (item as Job).company : (item as Profile).name}
              className="h-24 w-24 object-contain"
            />
          </div>
          <CardTitle>
            {type === "job" ? (item as Job).title : (item as Profile).name}
          </CardTitle>
          <CardDescription>
            {type === "job" ? (item as Job).company : (item as Profile).title} • {item.location}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {type === "job" ? (
              <>
                <div>
                  <div className="text-lg font-semibold">{(item as Job).salary}</div>
                  <p className="text-muted-foreground mt-2">{(item as Job).description}</p>
                </div>
                <div>
                  <p className="font-medium mb-2">Requirements:</p>
                  <div className="flex flex-wrap gap-2">
                    {(item as Job).requirements.map((req, i) => (
                      <Badge key={i}>{req}</Badge>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <>
                <p className="text-muted-foreground">{(item as Profile).bio}</p>
                <div>
                  <p className="font-medium mb-2">Skills:</p>
                  <div className="flex flex-wrap gap-2">
                    {(item as Profile).skills.map((skill, i) => (
                      <Badge key={i}>{skill}</Badge>
                    ))}
                  </div>
                </div>
                <div className="mt-4">
                  <p className="font-medium">Connection Value: <span className="text-primary">{(item as Profile).connectionValue}%</span></p>
                  <div className="w-full bg-muted rounded-full h-2.5 mt-2">
                    <div 
                      className="bg-primary h-2.5 rounded-full" 
                      style={{ width: `${(item as Profile).connectionValue}%` }}
                    ></div>
                  </div>
                </div>
              </>
            )}
          </div>
        </CardContent>
        <CardFooter className="justify-between pt-2">
          <Button 
            variant="outline" 
            size="lg" 
            className="rounded-full" 
            onClick={handleSwipeLeft}
          >
            <ChevronLeft className="mr-2 h-5 w-5" />
            Skip
          </Button>
          <Button 
            variant="default" 
            size="lg" 
            className="rounded-full" 
            onClick={handleSwipeRight}
          >
            <ChevronRight className="mr-2 h-5 w-5" />
            Connect
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};
