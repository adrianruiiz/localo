import Link from "next/link";
import { Button } from "../ui/button";

export const PromotionCard = () => (
  <div
    className="relative rounded-lg overflow-hidden h-full
               bg-[url('/img-prod.jpg')] bg-cover bg-center "
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-black/30" />

     <div className="absolute inset-0 z-10 flex flex-col p-6">
      <div>
        <span className="text-sm font-medium text-white mb-2 block">
          Promotion
        </span>
        <h2 className="text-xl font-bold text-white">
          Bold. Must. Have.
        </h2>
      </div>

      <div className="mt-auto">
        
        <Button asChild variant="outline">
            <Link href="/">
                <span>See What's New</span>
            </Link>
        </Button>
        
      </div>
    </div>
  </div>
);
