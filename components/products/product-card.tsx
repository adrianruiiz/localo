'use client';

import { useState } from 'react';

interface Badge {
  text: string;
  variant: 'default' | 'sale';
}

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  images: string[];
  sizes?: string[];
  badges?: Badge[];
}

export const ProductCard = ({ product }: { product: Product }) => {
  const [currentImage, setCurrentImage] = useState(0);
  
  return (
    <div className="bg-white rounded-lg overflow-hidden group">
      <div 
        className="relative aspect-square overflow-hidden cursor-pointer"
        onMouseEnter={() => setCurrentImage(1)}
        onMouseLeave={() => setCurrentImage(0)}
      >
        {product.badges && (
          <div className="absolute top-3 left-3 z-10 flex flex-col gap-1">
            {product.badges.map((badge, idx) => (
              <span
                key={idx}
                className={`px-2 py-1 text-xs font-semibold rounded ${
                  badge.variant === 'sale' ? 'bg-red-500 text-white' : 'bg-blue-500 text-white'
                }`}
              >
                {badge.text}
              </span>
            ))}
          </div>
        )}
        
        <div className="relative w-full h-full">
          {product.images.map((image, idx) => (
            <img
              key={idx}
              src={image}
              alt={product.name}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                currentImage === idx ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </div>
      </div>
      
      <div className="p-4">
        <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
          {product.category}
        </p>
        <h3 className="font-semibold text-gray-900 mb-2">
          {product.name}
        </h3>
        
        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-400 line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>
        
        {product.sizes && (
          <div className="flex gap-2">
            {product.sizes.map((size) => (
            <button
                key={size}
                className="
                min-w-[36px] h-8 px-2
                rounded-md
                border border-gray-300
                text-sm font-medium text-gray-900
                flex items-center justify-center
                hover:border-gray-900
                hover:bg-gray-100
                transition
                "
                aria-label={`Size ${size}`}
            >
                {size}
            </button>
            ))}

          </div>
        )}
      </div>
    </div>
  );
};