export type ProductType = {
  id: number,
  name: string,
  category: string,
  price: number,
  unit: string,
  image: string,
  sales: number,
  new: boolean,
  description: string,
  composition?: string
};

export type CartItemType = {
  product: ProductType,
  amount: number
};

export type CategoryType = {
  name: string,
  products: ProductType[],
  maxAmountRendered?: number,
}

export type CategoryIDType = 'new' | 'popular' | 'milk-products' | 'sweets' | 'fruits-and-vegetables' | 'drinks' | 'bread-and-pastries'