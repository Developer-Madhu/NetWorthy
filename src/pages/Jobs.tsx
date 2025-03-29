
import { SwipeDeck } from "@/components/SwipeDeck";
import { jobs } from "@/data/mockData";

const Jobs = () => {
  return (
    <div className="container mx-auto p-4 pb-20 sm:pb-4 max-w-xl">
      <h1 className="text-3xl font-bold mb-6 text-center">Find Jobs</h1>
      <p className="text-muted-foreground text-center mb-8">
        Swipe right to apply, or left to skip
      </p>
      
      <SwipeDeck items={jobs} type="job" />
    </div>
  );
};

export default Jobs;
