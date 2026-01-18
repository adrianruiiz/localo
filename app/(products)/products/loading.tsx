import { ProductSkeleton } from "@/components/products/product-skeleton";
import { PromotionCard } from "@/components/products/promotion-card";

 

export default function Loading() {
  return (
    <div className="space-y-6">
      <div className="h-10 bg-gray-200 rounded w-64 animate-pulse" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <ProductSkeleton />
        <ProductSkeleton />
        <ProductSkeleton />
        <ProductSkeleton />
      </div>
    </div>
  )
}