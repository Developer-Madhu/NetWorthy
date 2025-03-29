
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useUser } from "@/context/UserContext";
import { Award, Edit, User, BarChart2, PlusCircle, Briefcase, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const Profile = () => {
  const { stats } = useUser();

  return (
    <div className="container mx-auto p-4 pb-20 sm:pb-4 max-w-3xl space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-2">
        <h1 className="text-3xl font-bold">My Profile</h1>
        <Button>
          <Edit className="mr-2 h-4 w-4" />
          Edit Profile
        </Button>
      </div>
      
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <Avatar className="h-24 w-24 border-2 border-gaming-primary shadow-lg">
                <AvatarImage src="https://source.unsplash.com/ti4uz330CwU/200x200" alt="User Avatar" className="object-cover" />
                <AvatarFallback className="bg-gaming-gradient text-white">
                  <User className="h-12 w-12" />
                </AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full bg-gaming-gradient flex items-center justify-center shadow-lg">
                <motion.div 
                  whileHover={{ rotate: 180 }}
                  transition={{ duration: 0.4 }}
                >
                  <Edit className="h-4 w-4 text-white" />
                </motion.div>
              </div>
            </motion.div>
            <div>
              <CardTitle className="text-2xl">Sam Smith</CardTitle>
              <CardDescription className="text-lg">Senior Product Designer</CardDescription>
              <div className="flex items-center mt-2 text-muted-foreground">
                <Briefcase className="h-4 w-4 mr-1" />
                <span className="mr-4">DesignCraft Inc.</span>
                <MapPin className="h-4 w-4 mr-1" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-2">Profile Completeness</h3>
              <div className="flex justify-between text-sm mb-1">
                <span>{stats.profileCompleteness}% complete</span>
                <span>{stats.profileCompleteness >= 80 ? "All set!" : "Add missing info"}</span>
              </div>
              <Progress value={stats.profileCompleteness} className="h-2" />
            </div>
            
            <div className="pt-2">
              <h3 className="font-medium mb-3">About Me</h3>
              <p className="text-muted-foreground">
                Product designer with 7+ years of experience creating user-centered digital products. 
                Passionate about solving complex problems with elegant, simple design solutions. 
                Experienced in leading design teams and collaborating with developers to ship high-quality products.
              </p>
            </div>
            
            <div className="pt-2">
              <h3 className="font-medium mb-3">Skills</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">UI Design</Badge>
                <Badge variant="secondary">UX Research</Badge>
                <Badge variant="secondary">Figma</Badge>
                <Badge variant="secondary">Prototyping</Badge>
                <Badge variant="secondary">User Testing</Badge>
                <Badge variant="secondary">Design Systems</Badge>
                <Badge variant="secondary">Adobe Creative Suite</Badge>
                <Badge variant="secondary">Sketch</Badge>
                <Button variant="outline" size="sm" className="h-7 gap-1">
                  <PlusCircle className="h-3 w-3" />
                  Add
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <BarChart2 className="mr-2 h-5 w-5 text-primary" />
            Career Stats
          </CardTitle>
          <CardDescription>
            Your professional journey in numbers
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="bg-muted/40 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold">{stats.jobsViewed}</div>
              <div className="text-sm text-muted-foreground">Jobs Viewed</div>
            </div>
            <div className="bg-muted/40 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold">{stats.profilesViewed}</div>
              <div className="text-sm text-muted-foreground">Profiles Viewed</div>
            </div>
            <div className="bg-muted/40 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold">{stats.matches}</div>
              <div className="text-sm text-muted-foreground">Connections</div>
            </div>
            <div className="bg-muted/40 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold">{stats.points}</div>
              <div className="text-sm text-muted-foreground">Total Points</div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Award className="mr-2 h-5 w-5 text-yellow-500" />
            Achievements & Badges
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.badges.map((badge, index) => (
              <div key={index} className="flex flex-col items-center justify-center text-center p-3 border rounded-lg">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div className="font-medium">{badge}</div>
              </div>
            ))}
            <div className="flex flex-col items-center justify-center text-center p-3 border rounded-lg bg-muted/40">
              <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center mb-2">
                <User className="h-6 w-6 text-muted-foreground" />
              </div>
              <div className="font-medium text-muted-foreground">More to unlock</div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">View All Badges</Button>
          <Button variant="link" className="ml-auto">
            How to earn more badges
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Profile;
