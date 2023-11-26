export interface Accommodation {
  id: string;
  category: string;
  region?: string;
  name: string;
  thumbnailImageUrl: string;
  minimumPrice: number;
  maximumPrice: number;
}

export interface AccommodationProp {
  accommodation: Accommodation;
}

export interface AccommodationResponse {
  data: {
    content: Accommodation[];
  };
}

export interface Festival {
  id: number;
  title: string;
  thumbnailImageUrl: string;
}

export interface RelatedProps {
  category: string;
  region: string;
}
