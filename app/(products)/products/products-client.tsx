'use client'

import { useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { PromotionCard } from '@/components/products/promotion-card'
import { ProductCard } from '@/components/products/product-card'
import { Product } from '@/types/product'

interface ProductsClientProps {
  products: Product[]
}

export function ProductsClient({ products }: ProductsClientProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)

  const handleScroll = () => {
    if (!scrollRef.current) return

    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
    const maxScroll = scrollWidth - clientWidth
    setProgress((scrollLeft / maxScroll) * 100)
  }

  const scrollByAmount = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return

    const amount = scrollRef.current.clientWidth * 0.9
    scrollRef.current.scrollBy({
      left: direction === 'right' ? amount : -amount,
      behavior: 'smooth',
    })
  }

  return (
    <div className="space-y-6">
      {/* Encabezado */}
      <div>
        <h1 className="text-3xl font-bold">New Arrivals</h1>
        <p className="text-muted-foreground">
          Traditional divides between personal and professional space.
        </p>
      </div>

      {/* Slider */}
      <div className="relative">
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="
            flex gap-6 overflow-x-auto scroll-smooth
            pb-4
            [&::-webkit-scrollbar]:hidden
          "
        >
           <div className="min-w-[280px] lg:min-w-[320px]">
            <PromotionCard />
          </div>

          {products.map(product => (
            <div
              key={product.id}
              className="min-w-[240px] sm:min-w-[260px] lg:min-w-[280px]"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

       
      </div>

      <div className="flex items-center gap-4">
       {/* bararr de progreso */}
        <div className="relative flex-1 h-1 bg-muted rounded-full overflow-hidden">
            <div
            className="h-full bg-primary transition-all"
            style={{ width: `${progress}%` }}
            />
        </div>

        {/* Botones */}
        <div className="flex gap-2">
            <button
            onClick={() => scrollByAmount('left')}
            className="p-2 rounded-full border bg-background hover:bg-muted transition"
            aria-label="Previous products"
            >
            <ChevronLeft className="h-4 w-4" />
            </button>

            <button
            onClick={() => scrollByAmount('right')}
            className="p-2 rounded-full border bg-background hover:bg-muted transition"
            aria-label="Next products"
            >
            <ChevronRight className="h-4 w-4" />
    </button>
  </div>
</div>
      
    </div>
  )
}
