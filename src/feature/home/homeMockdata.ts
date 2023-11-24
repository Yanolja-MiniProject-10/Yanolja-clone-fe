export interface Idata {
  id: number;
  name: string;
  thumbnailImageUrl: string;
  category: string;
  totalRoomCount: number;
  reservedRoomCount: number;
  minimumPrice: number;
  maximumPrice: number;
}

export const responseMock = {
  status: 200,
  message: "SUCCESS",
  data: {
    content: [
      {
        id: 1,
        name: "llll 모텔",
        thumbnailImageUrl:
          "https://ybe-bucket.s3.ap-northeast-2.amazonaws.com/ACCOMMODATION_THUMB_NAIL_1_thumbnail.png",
        category: "MOTEL",
        totalRoomCount: 30,
        reservedRoomCount: 0,
        minimumPrice: 50000,
        maximumPrice: 50000,
      },
      {
        id: 2,
        name: "bbbb 모텔",
        thumbnailImageUrl:
          "https://ybe-bucket.s3.ap-northeast-2.amazonaws.com/ACCOMMODATION_THUMB_NAIL_2_thumbnail.png",
        category: "MOTEL",
        totalRoomCount: 30,
        reservedRoomCount: 0,
        minimumPrice: 50000,
        maximumPrice: 50000,
      },
      {
        id: 3,
        name: "cccc 모텔",
        thumbnailImageUrl:
          "https://ybe-bucket.s3.ap-northeast-2.amazonaws.com/ACCOMMODATION_THUMB_NAIL_3_thumbnail.png",
        category: "MOTEL",
        totalRoomCount: 30,
        reservedRoomCount: 0,
        minimumPrice: 50000,
        maximumPrice: 50000,
      },
      {
        id: 4,
        name: "dddd 모텔",
        thumbnailImageUrl:
          "https://ybe-bucket.s3.ap-northeast-2.amazonaws.com/ACCOMMODATION_THUMB_NAIL_4_thumbnail.png",
        category: "MOTEL",
        totalRoomCount: 0,
        reservedRoomCount: 0,
        minimumPrice: 0,
        maximumPrice: 1000000000,
      },
      {
        id: 5,
        name: "aaaa 모텔",
        thumbnailImageUrl:
          "https://ybe-bucket.s3.ap-northeast-2.amazonaws.com/ACCOMMODATION_THUMB_NAIL_5_thumbnail.png",
        category: "MOTEL",
        totalRoomCount: 20,
        reservedRoomCount: 0,
        minimumPrice: 50000,
        maximumPrice: 50000,
      },
      {
        id: 6,
        name: "AAAA 호텔",
        thumbnailImageUrl:
          "https://ybe-bucket.s3.ap-northeast-2.amazonaws.com/ACCOMMODATION_THUMB_NAIL_6_thumbnail.png",
        category: "HOTEL_RESORT",
        totalRoomCount: 0,
        reservedRoomCount: 0,
        minimumPrice: 0,
        maximumPrice: 1000000000,
      },
      {
        id: 7,
        name: "BBBB 호텔",
        thumbnailImageUrl:
          "https://ybe-bucket.s3.ap-northeast-2.amazonaws.com/ACCOMMODATION_THUMB_NAIL_7_thumbnail.png",
        category: "HOTEL_RESORT",
        totalRoomCount: 0,
        reservedRoomCount: 0,
        minimumPrice: 0,
        maximumPrice: 1000000000,
      },
      {
        id: 8,
        name: "CCCC 호텔",
        thumbnailImageUrl:
          "https://ybe-bucket.s3.ap-northeast-2.amazonaws.com/ACCOMMODATION_THUMB_NAIL_8_thumbnail.png",
        category: "HOTEL_RESORT",
        totalRoomCount: 0,
        reservedRoomCount: 0,
        minimumPrice: 0,
        maximumPrice: 1000000000,
      },
      {
        id: 9,
        name: "DDDD 호텔",
        thumbnailImageUrl:
          "https://ybe-bucket.s3.ap-northeast-2.amazonaws.com/ACCOMMODATION_THUMB_NAIL_9_thumbnail.png",
        category: "HOTEL_RESORT",
        totalRoomCount: 0,
        reservedRoomCount: 0,
        minimumPrice: 0,
        maximumPrice: 1000000000,
      },
      {
        id: 10,
        name: "EEEE 호텔",
        thumbnailImageUrl:
          "https://ybe-bucket.s3.ap-northeast-2.amazonaws.com/ACCOMMODATION_THUMB_NAIL_10_thumbnail.png",
        category: "HOTEL_RESORT",
        totalRoomCount: 0,
        reservedRoomCount: 0,
        minimumPrice: 0,
        maximumPrice: 1000000000,
      },
      {
        id: 11,
        name: "1111 빌라",
        thumbnailImageUrl:
          "https://ybe-bucket.s3.ap-northeast-2.amazonaws.com/ACCOMMODATION_THUMB_NAIL_11_thumbnail.png",
        category: "PENSION_VILLA",
        totalRoomCount: 0,
        reservedRoomCount: 0,
        minimumPrice: 0,
        maximumPrice: 1000000000,
      },
      {
        id: 12,
        name: "2222 빌라",
        thumbnailImageUrl:
          "https://ybe-bucket.s3.ap-northeast-2.amazonaws.com/ACCOMMODATION_THUMB_NAIL_12_thumbnail.png",
        category: "PENSION_VILLA",
        totalRoomCount: 0,
        reservedRoomCount: 0,
        minimumPrice: 0,
        maximumPrice: 1000000000,
      },
      {
        id: 13,
        name: "3333 빌라",
        thumbnailImageUrl:
          "https://ybe-bucket.s3.ap-northeast-2.amazonaws.com/ACCOMMODATION_THUMB_NAIL_13_thumbnail.png",
        category: "PENSION_VILLA",
        totalRoomCount: 0,
        reservedRoomCount: 0,
        minimumPrice: 0,
        maximumPrice: 1000000000,
      },
      {
        id: 14,
        name: "4444 빌라",
        thumbnailImageUrl:
          "https://ybe-bucket.s3.ap-northeast-2.amazonaws.com/ACCOMMODATION_THUMB_NAIL_14_thumbnail.png",
        category: "PENSION_VILLA",
        totalRoomCount: 0,
        reservedRoomCount: 0,
        minimumPrice: 0,
        maximumPrice: 1000000000,
      },
      {
        id: 15,
        name: "5555 빌라",
        thumbnailImageUrl:
          "https://ybe-bucket.s3.ap-northeast-2.amazonaws.com/ACCOMMODATION_THUMB_NAIL_15_thumbnail.png",
        category: "PENSION_VILLA",
        totalRoomCount: 0,
        reservedRoomCount: 0,
        minimumPrice: 0,
        maximumPrice: 1000000000,
      },
      {
        id: 16,
        name: "ㄷㄷㄷㄷ 리조트",
        thumbnailImageUrl:
          "https://ybe-bucket.s3.ap-northeast-2.amazonaws.com/ACCOMMODATION_THUMB_NAIL_16_thumbnail.png",
        category: "HOTEL_RESORT",
        totalRoomCount: 0,
        reservedRoomCount: 0,
        minimumPrice: 0,
        maximumPrice: 1000000000,
      },
      {
        id: 17,
        name: "ㄱㄱㄱㄱ 리조트",
        thumbnailImageUrl:
          "https://ybe-bucket.s3.ap-northeast-2.amazonaws.com/ACCOMMODATION_THUMB_NAIL_17_thumbnail.png",
        category: "HOTEL_RESORT",
        totalRoomCount: 0,
        reservedRoomCount: 0,
        minimumPrice: 0,
        maximumPrice: 1000000000,
      },
      {
        id: 18,
        name: "ㄴㄴㄴㄴ 리조트",
        thumbnailImageUrl:
          "https://ybe-bucket.s3.ap-northeast-2.amazonaws.com/ACCOMMODATION_THUMB_NAIL_18_thumbnail.png",
        category: "HOTEL_RESORT",
        totalRoomCount: 0,
        reservedRoomCount: 0,
        minimumPrice: 0,
        maximumPrice: 1000000000,
      },
      {
        id: 19,
        name: "ㄹㄹㄹㄹ 리조트",
        thumbnailImageUrl:
          "https://ybe-bucket.s3.ap-northeast-2.amazonaws.com/ACCOMMODATION_THUMB_NAIL_19_thumbnail.png",
        category: "HOTEL_RESORT",
        totalRoomCount: 0,
        reservedRoomCount: 0,
        minimumPrice: 0,
        maximumPrice: 1000000000,
      },
      {
        id: 20,
        name: "ㅅㅅㅅㅅ 리조트",
        thumbnailImageUrl:
          "https://ybe-bucket.s3.ap-northeast-2.amazonaws.com/ACCOMMODATION_THUMB_NAIL_20_thumbnail.png",
        category: "HOTEL_RESORT",
        totalRoomCount: 0,
        reservedRoomCount: 0,
        minimumPrice: 0,
        maximumPrice: 1000000000,
      },
    ],
    pageable: {
      pageNumber: 0,
      pageSize: 20,
      sort: {
        empty: true,
        sorted: false,
        unsorted: true,
      },
      offset: 0,
      paged: true,
      unpaged: false,
    },
    totalElements: 20,
    totalPages: 1,
    last: true,
    size: 20,
    number: 0,
    sort: {
      empty: true,
      sorted: false,
      unsorted: true,
    },
    numberOfElements: 20,
    first: true,
    empty: false,
  },
};
