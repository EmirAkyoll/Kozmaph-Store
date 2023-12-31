interface Product {
  _id?: string;
  productId: string;
  productName: string;
  productImage: string;
  productPrice: number;
  productSeller: string;
  productQuantity: number;
}

export interface Order {
  _id: string;
  products: Product[];
  buyer_id: string;
  buyer_full_name: string;
  buyer_name: string;
  buyer_address: string;
  buyer_email: string;
  total_price: number;
  date: string;
}
