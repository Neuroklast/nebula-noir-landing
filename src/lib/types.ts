export interface Product {
  id: string
  name: string
  description: string
  price: number
  category: 'chokers' | 'bracelets' | 'rings' | 'earrings' | 'accessories'
  image: string
  madeToOrder: boolean
  estimatedDays?: number
}

export interface CartItem {
  product: Product
  quantity: number
}
