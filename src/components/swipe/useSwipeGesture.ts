
import { useState, useEffect, RefObject } from "react";

export const useSwipeGesture = (
  cardRef: RefObject<HTMLDivElement>,
  threshold: number = 100,
  onSwipeLeft: () => void,
  onSwipeRight: () => void
) => {
  const [startX, setStartX] = useState(0);
  const [offsetX, setOffsetX] = useState(0);
  const [swipeDirection, setSwipeDirection] = useState<"left" | "right" | null>(null);

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
    if (offsetX > threshold) {
      handleSwipeRight();
    } else if (offsetX < -threshold) {
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
  
  return {
    offsetX,
    swipeDirection,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    handleSwipeLeft,
    handleSwipeRight,
    getSwipeStyles,
  };
};
