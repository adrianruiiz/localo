export const ProductSkeleton = () => (
  <div className="bg-white rounded-lg overflow-hidden">
    <div className="relative aspect-square bg-gray-200 animate-pulse" />
    <div className="p-4 space-y-2">
      <div className="h-3 bg-gray-200 rounded animate-pulse w-1/3" />
      <div className="h-4 bg-gray-200 rounded animate-pulse w-2/3" />
      <div className="flex gap-2 items-center">
        <div className="h-5 bg-gray-200 rounded animate-pulse w-16" />
        <div className="h-4 bg-gray-200 rounded animate-pulse w-12" />
      </div>
      <div className="flex gap-2 pt-2">
        <div className="w-6 h-6 rounded-full bg-gray-200 animate-pulse" />
        <div className="w-6 h-6 rounded-full bg-gray-200 animate-pulse" />
      </div>
    </div>
  </div>
);