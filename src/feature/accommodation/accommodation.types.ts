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
  region?: string;
}

export interface AccommodationRegionDefault {
  region: string;
}

export interface AccommodationMemberDefault {
  guest: number;
}

export interface AccommodationDateDefault {
  startDate: Date;
  endDate: Date;
}
