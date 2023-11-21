export interface FavouriteEntity {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
  qty: number;
}

export interface FavouriteState {
  favourite: FavouriteEntity[];
}
