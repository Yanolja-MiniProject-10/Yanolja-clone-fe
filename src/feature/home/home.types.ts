export interface AccommodationItemProps {
  id?: string;
  index?: number;
  name: string;
  thumbnail: string;
  minPrice: number;
  maxPrice: number;
}

export interface RelatedProps {
  category: string;
  region: string;
}

export interface FestivalResponse {
  id?: number;
  title: string;
  thumbnailImageUrl: string;
}

export interface Accommodation2 {
  id?: string;
  index?: number;
  category?: string;
  region?: string;
  name: string;
  thumbnailImageUrl: string;
  minimumPrice: number;
  maximumPrice: number;
}
