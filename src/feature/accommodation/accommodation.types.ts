export interface AccommodationProps {
  id: number;
  name: string;
  category: string;
  region: string;
  thumbnailImageUrl: string;
  minimumPrice: number;
  maximumPrice: number;
}

export interface AccommodationListParams {
  startDate: Date;
  endDate: Date;
  guest: number;
}

export interface AccommodationRegionParams {
  startDate: Date;
  endDate: Date;
  guest: number;
  region: string;
}

export interface accommodationMemberDefault {
  guest: number;
}

export interface accommodationDateDefault {
  startDate: Date;
  endDate: Date;
}
