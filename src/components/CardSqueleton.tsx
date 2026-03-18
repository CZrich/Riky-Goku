
  export default function  CardSkeleton() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full animate-pulse">
      {/* para la imagen*/}
      <div className="aspect-[4/5] bg-gray-200" />
      
      {/* resto de contenido de la card */}
      <div className="p-6 space-y-4 flex-grow">
        <div className="space-y-2">
          <div className="h-3 w-1/4 bg-gray-200 rounded" />
          <div className="h-6 w-3/4 bg-gray-200 rounded" />
        </div>
        
        <div className="space-y-2">
          <div className="h-4 w-full bg-gray-100 rounded" />
          <div className="h-4 w-5/6 bg-gray-100 rounded" />
        </div>

        <div className="pt-4 border-t border-gray-50 mt-auto flex justify-between">
          <div className="h-3 w-16 bg-gray-100 rounded" />
          <div className="h-3 w-12 bg-gray-100 rounded" />
        </div>
      </div>
    </div>
  );
}