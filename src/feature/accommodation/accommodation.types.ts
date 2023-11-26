export interface AccommodationProps {
  id: number;
  name: string;
  category: string;
  thumbnailImageUrl: string;
  region: string;
  minimumPrice: number;
  maximumPrice: number;
}

export interface AccommodationListParams {
  startDate: Date;
  endDate: Date;
  guest: number;
}

export interface accommodationMemberDefault {
  guest: number;
}

export interface accommodationDateDefault {
  startDate: Date;
  endDate: Date;
}
