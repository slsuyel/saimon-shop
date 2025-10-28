export interface TProduct {
  id: number|string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface TCartItem extends TProduct {
  quantity: number;
}
