import CardSkeleton from "./CardSqueleton";

export function CardGridSkeleton() {
  return (
    


    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-6">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => <CardSkeleton key={n} />)}
    </div>
    

  );
}