export interface AccommodationProps {
  id: number;
  name: string;
  category: string;
  thumbnailImageUrl: string;
  minimumPrice: number;
  maximumPrice: number;
}

export interface accommodationMemberDefault {
  memberNumber: number;
}

export interface accommodationDateDefault {
  startDate: Date;
  endDate: Date;
}
