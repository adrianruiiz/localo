export interface Badge {
  text: string
  variant: 'default' | 'sale'
}

export interface Product {
  id: number
  name: string
  category: string
  price: number
  originalPrice?: number
  images: string[]
  colors?: string[]
  badges?: Badge[]
}