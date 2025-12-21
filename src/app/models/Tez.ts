export interface Category {
  categoryId: string;
  name: string;
  image: string;
  imageUrl:string;
  description: string;
}

export interface ProductVariant {
  variantId: string;
  productId:string;
  variantName: string;
  price: number;
  discountPrice: number;
}

export interface Product {
  productId: string;
  name: string;
  description: string;
  categoryId:string;
  image: string;
  imageUrl:string;
  variants:ProductVariant[]
}
