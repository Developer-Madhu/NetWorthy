
import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Job, Profile } from "@/data/mockData";
import { ChevronLeft, ChevronRight, ThumbsDown, ThumbsUp, Zap } from "lucide-react";
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

  // Calculate dynamic styles based on swipe
  const getSwipeStyles = () => {
    // Base rotation and scale
    const rotate = offsetX / 20;
    const scale = 1 - Math.min(Math.abs(offsetX) / 800, 0.1);
    
    // Dynamic borders and shadows for positive swipe (right)
    const rightSwipeBorder = offsetX > 0 
      ? `2px solid rgba(139, 92, 246, ${Math.min(offsetX/200, 1)})`
      : '';
    const rightSwipeShadow = offsetX > 0 
      ? `0 0 ${Math.min(offsetX/5, 20)}px rgba(139, 92, 246, ${Math.min(offsetX/200, 0.8)})`
      : '';
      
    // Dynamic borders and shadows for negative swipe (left)
    const leftSwipeBorder = offsetX < 0 
      ? `2px solid rgba(249, 115, 22, ${Math.min(Math.abs(offsetX)/200, 1)})`
      : '';
    const leftSwipeShadow = offsetX < 0 
      ? `0 0 ${Math.min(Math.abs(offsetX)/5, 20)}px rgba(249, 115, 22, ${Math.min(Math.abs(offsetX)/200, 0.8)})`
      : '';
    
    return {
      transform: `translateX(${offsetX}px) rotate(${rotate}deg) scale(${scale})`,
      border: offsetX > 0 ? rightSwipeBorder : leftSwipeBorder,
      boxShadow: offsetX > 0 ? rightSwipeShadow : leftSwipeShadow,
      opacity: 1 - Math.abs(offsetX) / 500,
    };
  };

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
        <AnimatePresence>
          {offsetX > swipeThreshold/2 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 0.9, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-gaming-gradient text-white p-4 rounded-full z-10 shadow-lg"
            >
              <ThumbsUp className="h-6 w-6" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Left swipe indicator */}
        <AnimatePresence>
          {offsetX < -swipeThreshold/2 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 0.9, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-accent text-white p-4 rounded-full z-10 shadow-lg"
            >
              <ThumbsDown className="h-6 w-6" />
            </motion.div>
          )}
        </AnimatePresence>
        
        <CardHeader className="relative">
          <motion.div 
            className="absolute top-4 right-4 bg-gaming-gradient text-white rounded-full px-4 py-1.5 text-sm font-medium flex items-center gap-1 shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Zap className="h-3 w-3" />
            {type === "job" ? (item as Job).postedDate : `${(item as Profile).experience}+ yrs`}
          </motion.div>
          
          <div className="h-40 rounded-t-lg mb-6 bg-gradient-to-r from-gaming-primary/10 to-gaming-secondary/10 flex items-center justify-center overflow-hidden">
            <motion.img 
              src={type === "job" ? (item as Job).logo : (item as Profile).avatar} 
              alt={type === "job" ? (item as Job).company : (item as Profile).name}
              className="h-28 w-28 object-contain rounded-lg"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
            />
          </div>
          
          <CardTitle className="text-2xl font-bold text-center">
            {type === "job" ? (item as Job).title : (item as Profile).name}
          </CardTitle>
          
          <CardDescription className="text-center flex items-center justify-center gap-1">
            <span>{type === "job" ? (item as Job).company : (item as Profile).title}</span> 
            <span className="inline-block mx-2">•</span> 
            <span>{item.location}</span>
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="space-y-4">
            {type === "job" ? (
              <>
                <div className="glass-panel p-4">
                  <div className="text-xl font-semibold gaming-text-glow">{(item as Job).salary}</div>
                  <p className="text-muted-foreground mt-2">{(item as Job).description}</p>
                </div>
                
                <div className="glass-panel p-4">
                  <p className="font-medium mb-3 gaming-text-glow">Requirements:</p>
                  <motion.div 
                    className="flex flex-wrap gap-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, staggerChildren: 0.1 }}
                  >
                    {(item as Job).requirements.map((req, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <Badge className="bg-gaming-gradient border-0 shadow-md px-3 py-1">{req}</Badge>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </>
            ) : (
              <>
                <div className="glass-panel p-4">
                  <p className="text-muted-foreground">{(item as Profile).bio}</p>
                </div>
                
                <div className="glass-panel p-4">
                  <p className="font-medium mb-3 gaming-text-glow">Skills:</p>
                  <motion.div 
                    className="flex flex-wrap gap-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, staggerChildren: 0.1 }}
                  >
                    {(item as Profile).skills.map((skill, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <Badge className="bg-gaming-gradient border-0 shadow-md px-3 py-1">{skill}</Badge>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
                
                <div className="glass-panel p-4">
                  <motion.div
                    initial={{ width: "0%" }}
                    animate={{ width: `${(item as Profile).connectionValue}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                  >
                    <p className="font-medium gaming-text-glow">Connection Value: <span className="text-primary">{(item as Profile).connectionValue}%</span></p>
                    <div className="w-full bg-gaming-border/30 rounded-full h-2.5 mt-2">
                      <div 
                        className="h-2.5 rounded-full bg-gaming-gradient"
                        style={{ width: `${(item as Profile).connectionValue}%` }}
                      ></div>
                    </div>
                  </motion.div>
                </div>
              </>
            )}
          </div>
        </CardContent>

        <CardFooter className="justify-between pt-2">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-full border-2 border-accent hover:bg-accent/10 hover:text-accent-foreground" 
              onClick={handleSwipeLeft}
            >
              <ChevronLeft className="mr-2 h-5 w-5" />
              Skip
            </Button>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              variant="default" 
              size="lg" 
              className="rounded-full bg-gaming-gradient hover:shadow-lg" 
              onClick={handleSwipeRight}
            >
              Connect
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};
