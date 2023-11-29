export interface Product {
  name: string;
  image_urls: string[];
  price: number;
  rating: number;
  seller: string;
  summary: string[];
  description: string[];
  features: string[];
  advantages?: string[];
  questions?: {
    question_text: string;
    answers: string;
  }[];
  comments?: {
    comment_text: string;
    rating?: number;
  }[];
}
