
import { Job } from "@/data/mockData";
import { Badge } from "@/components/ui/badge";
import { CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";

type JobCardContentProps = {
  job: Job;
};

export const JobCardContent = ({ job }: JobCardContentProps) => {
  return (
    <CardContent>
      <div className="space-y-4">
        <div className="glass-panel p-4">
          <div className="text-xl font-semibold gaming-text-glow">{job.salary}</div>
          <p className="text-muted-foreground mt-2">{job.description}</p>
        </div>
        
        <div className="glass-panel p-4">
          <p className="font-medium mb-3 gaming-text-glow">Requirements:</p>
          <motion.div 
            className="flex flex-wrap gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, staggerChildren: 0.1 }}
          >
            {job.requirements.map((req, i) => (
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
      </div>
    </CardContent>
  );
};
