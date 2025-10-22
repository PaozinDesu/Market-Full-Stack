export interface CreateProductDto {
  description: string;
  name: string;
  price: number;
  image: string;
  categories: string[];
  options: { name: string }[];
}
