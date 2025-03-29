
import { CardHeader as UICardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Job, Profile } from "@/data/mockData";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";

type CardHeaderProps = {
  item: Job | Profile;
  type: "job" | "profile";
};

export const CardHeader = ({ item, type }: CardHeaderProps) => {
  return (
    <UICardHeader className="relative">
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
    </UICardHeader>
  );
};
