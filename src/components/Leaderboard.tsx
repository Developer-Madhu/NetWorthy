
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Trophy, Award, Users, User } from "lucide-react";
import { motion } from "framer-motion";

interface LeaderboardEntry {
  id: number;
  name: string;
  avatar: string;
  points: number;
  rank: number;
  badge: string;
}

const leaderboardData: LeaderboardEntry[] = [
  {
    id: 1,
    name: "Alex Johnson",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
    points: 2450,
    rank: 1,
    badge: "Networking Champion"
  },
  {
    id: 2,
    name: "Morgan Chen",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
    points: 2120,
    rank: 2,
    badge: "Connection Expert"
  },
  {
    id: 3,
    name: "Taylor Wilson",
    avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
    points: 1870,
    rank: 3,
    badge: "Rising Star"
  },
  {
    id: 4,
    name: "Jamie Rodriguez",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
    points: 1655,
    rank: 4,
    badge: "Engagement Pro"
  },
  {
    id: 5,
    name: "Jordan Smith",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
    points: 1590,
    rank: 5,
    badge: "Referral Master"
  },
];

export const Leaderboard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Trophy className="mr-2 h-5 w-5 text-yellow-500" />
          Top Networkers
        </CardTitle>
        <CardDescription>See who's leading in professional networking</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {leaderboardData.map((entry, index) => (
            <motion.div 
              key={entry.id} 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className={`flex items-center p-3 rounded-lg ${
                entry.rank === 1 
                  ? "bg-gradient-to-r from-yellow-50 to-yellow-100 border border-yellow-200" 
                  : "border"
              }`}
            >
              <div className="flex items-center justify-center h-8 w-8 rounded-full bg-muted text-muted-foreground font-bold">
                {entry.rank}
              </div>
              <div className="mx-3">
                <Avatar className="h-10 w-10 border border-gaming-border shadow-sm">
                  <AvatarImage src={entry.avatar} alt={entry.name} className="object-cover" />
                  <AvatarFallback className="bg-gaming-primary/20">
                    <User className="h-5 w-5 text-gaming-primary" />
                  </AvatarFallback>
                </Avatar>
              </div>
              <div className="flex-1">
                <div className="font-medium">{entry.name}</div>
                <div className="text-xs text-muted-foreground flex items-center">
                  <Award className="h-3 w-3 mr-1" />
                  {entry.badge}
                </div>
              </div>
              <div className="font-bold text-right">
                {entry.points}
                <div className="text-xs text-muted-foreground">points</div>
              </div>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
