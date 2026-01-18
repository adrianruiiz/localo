// app/(products)/products/page.tsx (Server Component) 
import { size } from 'better-auth'
import { ProductsClient } from './products-client'
 // import { getProducts } from '@/lib/api/products' // descomentar para usar DB


const staticProducts = [
  {
    id: 1,
    name: 'Leather Chair',
    category: 'CHAIRS',
    price: 799.00,
    originalPrice: 899.00,
    images: [
      'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=500&fit=crop'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    // badges: [
    //   { text: 'Best Choice!', variant: 'default' as const },
    //   { text: 'Sale', variant: 'sale' as const }
    // ]
  },
  {
    id: 2,
    name: 'Ceramic Cup',
    category: 'CUPS',
    price: 19.00,
    images: [
      'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=500&h=500&fit=crop'
    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 3,
    name: 'Dining Chair',
    category: 'CHAIR',
    price: 199.00,
    originalPrice: 299.00,
    images: [
      'https://images.unsplash.com/photo-1503602642458-232111445657?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=500&h=500&fit=crop'
    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 4,
    name: 'Wall Clock',
    category: 'CLOCKS',
    price: 159.00,
    images: [
      'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1595675024853-0f3ec9098ac7?w=500&h=500&fit=crop'
    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 5,
    name: 'Leather Chair',
    category: 'CHAIRS',
    price: 799.00,
    originalPrice: 899.00,
    images: [
      'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=500&fit=crop'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    // badges: [
    //   { text: 'Best Choice!', variant: 'default' as const },
    //   { text: 'Sale', variant: 'sale' as const }
    // ]
  },
  {
    id: 6,
    name: 'Ceramic Cup',
    category: 'CUPS',
    price: 19.00,
    images: [
      'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=500&h=500&fit=crop'
    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 7,
    name: 'Leather Chair',
    category: 'CHAIRS',
    price: 799.00,
    originalPrice: 899.00,
    images: [
      'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=500&fit=crop'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    // badges: [
    //   { text: 'Best Choice!', variant: 'default' as const },
    //   { text: 'Sale', variant: 'sale' as const }
    // ]
  },
  {
    id: 8,
    name: 'Ceramic Cup',
    category: 'CUPS',
    price: 19.00,
    images: [
      'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=500&h=500&fit=crop'
    ],
    sizes: ['M', 'L', 'XL']
  },
  {
    id: 9,
    name: 'Dining Chair',
    category: 'CHAIR',
    price: 199.00,
    originalPrice: 299.00,
    images: [
      'https://images.unsplash.com/photo-1503602642458-232111445657?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=500&h=500&fit=crop'
    ],
    sizes: ['M', 'L', 'XL']
  },
  {
    id: 10,
    name: 'Wall Clock',
    category: 'CLOCKS',
    price: 159.00,
    images: [
      'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1595675024853-0f3ec9098ac7?w=500&h=500&fit=crop'
    ],
    sizes: ['M']
  },
    

]

async function getProducts() {
  // simular fetch de DB
  await new Promise(resolve => setTimeout(resolve, 1000))
  return [ ...staticProducts ]
}

export default async function ProductsPage() {
  const products = await getProducts()
  return <ProductsClient products={products} />
}