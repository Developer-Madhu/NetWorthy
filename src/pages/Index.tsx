
import { AppNavigation } from "@/components/AppNavigation";
import { UserProvider } from "@/context/UserContext";
import { Outlet } from "react-router-dom";

const Index = () => {
  return (
    <UserProvider>
      <div className="min-h-screen flex flex-col sm:flex-row">
        <AppNavigation />
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </UserProvider>
  );
};

export default Index;
