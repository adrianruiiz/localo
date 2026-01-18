// app/(products)/products/layout.tsx
import { HeroHeader } from "@/components/layout/header/header";

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroHeader />  
       
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="w-full mt-20" >
          {children}
        </div>
      </div>
    </div>
  );
}