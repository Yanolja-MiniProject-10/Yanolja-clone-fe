export interface Accommodation {
  id: string;
  category: string;
  region: string;
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

export interface RelatedResponse {
  data: {
    data: {
      content: Accommodation[];
    };
  };
}

export interface Festival {
  id: number;
  title: string;
  thumbnailImageUrl: string;
  startDate: string;
  endDate: string;
  address: string;
  city: string;
  area: string;
  phoneNumber: string;
}

export interface FestivalResponse {
  data: {
    content: Festival[];
  };
}

export interface RelatedProps {
  category?: string;
  region?: string;
}

export interface RegionList {
  data: {
    regions: string[];
  };
}

export interface RegionListResponse {
  data: {
    data: {
      regions: string[];
    };
  };
}
