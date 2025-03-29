
import { UserStats } from "@/components/UserStats";
import { AIAssistant } from "@/components/AIAssistant";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, Users, Zap } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="container max-w-5xl mx-auto p-4 pb-20 sm:pb-4 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <Badge variant="outline" className="text-xs">
          <Zap className="h-3 w-3 mr-1" />
          Daily streak: 3 days
        </Badge>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <UserStats />
        </div>
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="mr-2 h-5 w-5 text-blue-500" />
                Upcoming Events
              </CardTitle>
              <CardDescription>Networking opportunities</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-lg border bg-muted/40 p-4">
                <div className="font-medium">Virtual Job Fair</div>
                <div className="text-sm text-muted-foreground mt-1">Tomorrow, 2:00 PM</div>
                <Button variant="link" className="px-0 h-auto mt-2">
                  Add to calendar
                </Button>
              </div>
              <div className="rounded-lg border bg-muted/40 p-4">
                <div className="font-medium">Tech Industry Mixer</div>
                <div className="text-sm text-muted-foreground mt-1">Thu, Oct 15 • 6:30 PM</div>
                <Button variant="link" className="px-0 h-auto mt-2">
                  Add to calendar
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Quick actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                <Link to="/jobs">
                  <Button 
                    variant="outline" 
                    className="w-full h-auto py-6 flex-col gap-2"
                  >
                    <Briefcase className="h-6 w-6 text-primary" />
                    <span>Find Jobs</span>
                  </Button>
                </Link>
                <Link to="/people">
                  <Button 
                    variant="outline" 
                    className="w-full h-auto py-6 flex-col gap-2"
                  >
                    <Users className="h-6 w-6 text-primary" />
                    <span>Connect</span>
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Career Assistant</h2>
        <AIAssistant />
      </div>
    </div>
  );
};

export default Dashboard;
