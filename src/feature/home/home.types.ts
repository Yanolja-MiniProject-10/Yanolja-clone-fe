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