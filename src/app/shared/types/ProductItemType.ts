export type ProductItemType = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  altText: string;
  quantity: number;
}

export type BlogItem = {
  id?: number;
  title?: string;
  body?: string;
  author?: string;
}