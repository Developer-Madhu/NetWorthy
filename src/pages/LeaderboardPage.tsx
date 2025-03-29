
import { Leaderboard } from "@/components/Leaderboard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useUser } from "@/context/UserContext";

const LeaderboardPage = () => {
  const { stats } = useUser();

  return (
    <div className="container mx-auto p-4 pb-20 sm:pb-4 max-w-3xl">
      <h1 className="text-3xl font-bold mb-6">Leaderboard</h1>
      
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Your Ranking</CardTitle>
          <CardDescription>Based on your activity and engagement</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between bg-muted/40 p-4 rounded-lg">
            <div className="flex items-center">
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-primary-foreground font-bold">
                24
              </div>
              <div className="ml-4">
                <div className="font-medium">Your Rank</div>
                <div className="text-sm text-muted-foreground">Top 15%</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold">{stats.points}</div>
              <div className="text-sm text-muted-foreground">points</div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Tabs defaultValue="global">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="global">Global Leaderboard</TabsTrigger>
          <TabsTrigger value="network">Your Network</TabsTrigger>
        </TabsList>
        <TabsContent value="global">
          <Leaderboard />
        </TabsContent>
        <TabsContent value="network">
          <div className="flex flex-col items-center justify-center p-12 text-center border rounded-lg">
            <Badge variant="outline" className="mb-4">Coming Soon</Badge>
            <h3 className="text-xl font-semibold mb-2">Network Leaderboard</h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              Connect with more professionals to see how you rank among your network!
            </p>
            <Button>Find People to Connect</Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LeaderboardPage;
