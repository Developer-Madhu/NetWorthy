
import { SwipeDeck } from "@/components/SwipeDeck";
import { profiles } from "@/data/mockData";

const People = () => {
  return (
    <div className="container mx-auto p-4 pb-20 sm:pb-4 max-w-xl">
      <h1 className="text-3xl font-bold mb-6 text-center">Connect with People</h1>
      <p className="text-muted-foreground text-center mb-8">
        Swipe right to connect, or left to skip
      </p>
      
      <SwipeDeck items={profiles} type="profile" />
    </div>
  );
};

export default People;
