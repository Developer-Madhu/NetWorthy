
import { CardFooter as UICardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

type CardFooterProps = {
  onSkip: () => void;
  onConnect: () => void;
};

export const CardFooter = ({ onSkip, onConnect }: CardFooterProps) => {
  return (
    <UICardFooter className="justify-between pt-2">
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button 
          variant="outline" 
          size="lg" 
          className="rounded-full border-2 border-accent hover:bg-accent/10 hover:text-accent-foreground" 
          onClick={onSkip}
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
          onClick={onConnect}
        >
          Connect
          <ChevronRight className="ml-2 h-5 w-5" />
        </Button>
      </motion.div>
    </UICardFooter>
  );
};
