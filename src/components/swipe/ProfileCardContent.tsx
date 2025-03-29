
import { Profile } from "@/data/mockData";
import { Badge } from "@/components/ui/badge";
import { CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

type ProfileCardContentProps = {
  profile: Profile;
};

export const ProfileCardContent = ({ profile }: ProfileCardContentProps) => {
  return (
    <CardContent>
      <div className="space-y-4">
        <div className="glass-panel p-4">
          <p className="text-muted-foreground">{profile.bio}</p>
        </div>
        
        <div className="glass-panel p-4">
          <p className="font-medium mb-3 gaming-text-glow">Skills:</p>
          <motion.div 
            className="flex flex-wrap gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, staggerChildren: 0.1 }}
          >
            {profile.skills.map((skill, i) => (
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
            animate={{ width: `${profile.connectionValue}%` }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <p className="font-medium gaming-text-glow">Connection Value: <span className="text-primary">{profile.connectionValue}%</span></p>
            <div className="w-full bg-gaming-border/30 rounded-full h-2.5 mt-2">
              <div 
                className="h-2.5 rounded-full bg-gaming-gradient"
                style={{ width: `${profile.connectionValue}%` }}
              ></div>
            </div>
          </motion.div>
        </div>
      </div>
    </CardContent>
  );
};
