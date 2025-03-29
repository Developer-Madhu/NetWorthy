
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Award, Users } from "lucide-react";

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
    avatar: "/placeholder.svg",
    points: 2450,
    rank: 1,
    badge: "Networking Champion"
  },
  {
    id: 2,
    name: "Morgan Chen",
    avatar: "/placeholder.svg",
    points: 2120,
    rank: 2,
    badge: "Connection Expert"
  },
  {
    id: 3,
    name: "Taylor Wilson",
    avatar: "/placeholder.svg",
    points: 1870,
    rank: 3,
    badge: "Rising Star"
  },
  {
    id: 4,
    name: "Jamie Rodriguez",
    avatar: "/placeholder.svg",
    points: 1655,
    rank: 4,
    badge: "Engagement Pro"
  },
  {
    id: 5,
    name: "Jordan Smith",
    avatar: "/placeholder.svg",
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
          {leaderboardData.map((entry) => (
            <div 
              key={entry.id} 
              className={`flex items-center p-3 rounded-lg ${
                entry.rank === 1 
                  ? "bg-gradient-to-r from-yellow-50 to-yellow-100 border border-yellow-200" 
                  : "border"
              }`}
            >
              <div className="flex items-center justify-center h-8 w-8 rounded-full bg-muted text-muted-foreground font-bold">
                {entry.rank}
              </div>
              <div className="h-10 w-10 rounded-full overflow-hidden mx-3">
                <img 
                  src={entry.avatar} 
                  alt={entry.name} 
                  className="h-full w-full object-cover"
                />
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
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
