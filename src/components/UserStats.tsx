
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useUser } from "@/context/UserContext";
import { Award, BarChart, Star, Zap } from "lucide-react";

export const UserStats = () => {
  const { stats } = useUser();
  
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Star className="mr-2 h-5 w-5 text-yellow-500" />
            Level {stats.level}
          </CardTitle>
          <CardDescription>
            {stats.points} points - {100 - (stats.points % 100)} points to next level
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Progress value={stats.points % 100} className="h-2" />
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <BarChart className="mr-2 h-5 w-5 text-blue-500" />
            Your Stats
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm">Profile Completeness</span>
              <span className="text-sm font-medium">{stats.profileCompleteness}%</span>
            </div>
            <Progress value={stats.profileCompleteness} className="h-2" />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-muted rounded-lg p-3">
              <div className="text-muted-foreground text-sm">Jobs Viewed</div>
              <div className="text-2xl font-bold">{stats.jobsViewed}</div>
            </div>
            <div className="bg-muted rounded-lg p-3">
              <div className="text-muted-foreground text-sm">Profiles Viewed</div>
              <div className="text-2xl font-bold">{stats.profilesViewed}</div>
            </div>
            <div className="bg-muted rounded-lg p-3">
              <div className="text-muted-foreground text-sm">Matches</div>
              <div className="text-2xl font-bold">{stats.matches}</div>
            </div>
            <div className="bg-muted rounded-lg p-3">
              <div className="text-muted-foreground text-sm">Badges</div>
              <div className="text-2xl font-bold">{stats.badges.length}</div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Award className="mr-2 h-5 w-5 text-purple-500" />
            Badges
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {stats.badges.map((badge, index) => (
              <Badge key={index} variant="secondary" className="py-1">
                <Zap className="mr-1 h-3 w-3" />
                {badge}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="text-sm text-muted-foreground">
          Complete actions to earn more badges!
        </CardFooter>
      </Card>
    </div>
  );
};
