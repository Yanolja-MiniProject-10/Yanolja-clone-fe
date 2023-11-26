import { FetchCartResult, Accommodations } from "./cart.types";

export const accommodationsNull = {
  status: 200,
  message: "SUCCESS",
  data: {
    cartId: 5,
    accommodations: [],
  },
};

export const cartResponse: FetchCartResult = {
  status: 200,
  message: "SUCCESS",
  data: {
    cartId: 1,
    accommodations: [
      {
        accommodationId: 1,
        name: "llll 모텔",
        address: "경기도 수원시",
        thumbnailImageUrl:
          "https://ybe-bucket.s3.ap-northeast-2.amazonaws.com/ACCOMMODATION_THUMB_NAIL_1_thumbnail.png",
        roomOptions: [
          {
            cartProductId: 5,
            roomOptionId: 3,
            name: "2인실(더블)",
            thumbnailImage: "https://ybe-bucket.s3.ap-northeast-2.amazonaws.com/ROOM_OPTION_THUMBNAIL_3_thumbnail.png",
            capacity: 2,
            pricePerNight: 500000,
            reservationStartDate: "2023-11-23",
            reservationEndDate: "2023-11-26",
            stayDuration: 3,
          },
        ],
      },
      {
        accommodationId: 2,
        name: "bbbb 모텔",
        address: "경기도 광주시",
        thumbnailImageUrl:
          "https://ybe-bucket.s3.ap-northeast-2.amazonaws.com/ACCOMMODATION_THUMB_NAIL_2_thumbnail.png",
        roomOptions: [
          {
            cartProductId: 6,
            roomOptionId: 4,
            name: "2인실(트윈)",
            thumbnailImage: "https://ybe-bucket.s3.ap-northeast-2.amazonaws.com/ROOM_OPTION_THUMBNAIL_4_thumbnail.png",
            capacity: 2,
            pricePerNight: 500000,
            reservationStartDate: "2023-11-23",
            reservationEndDate: "2023-11-26",
            stayDuration: 3,
          },
          {
            cartProductId: 9,
            roomOptionId: 6,
            name: "2인실(트윈)3",
            thumbnailImage: "https://ybe-bucket.s3.ap-northeast-2.amazonaws.com/ROOM_OPTION_THUMBNAIL_6_thumbnail.png",
            capacity: 2,
            pricePerNight: 500000,
            reservationStartDate: "2023-11-23",
            reservationEndDate: "2023-11-26",
            stayDuration: 3,
          },
        ],
      },
      {
        accommodationId: 3,
        name: "cccc 모텔",
        address: "경기도 성남시",
        thumbnailImageUrl:
          "https://ybe-bucket.s3.ap-northeast-2.amazonaws.com/ACCOMMODATION_THUMB_NAIL_3_thumbnail.png",
        roomOptions: [
          {
            cartProductId: 10,
            roomOptionId: 7,
            name: "4인실",
            thumbnailImage: "https://ybe-bucket.s3.ap-northeast-2.amazonaws.com/ROOM_OPTION_THUMBNAIL_7_thumbnail.png",
            capacity: 4,
            pricePerNight: 500000,
            reservationStartDate: "2023-11-23",
            reservationEndDate: "2023-11-26",
            stayDuration: 3,
          },
          {
            cartProductId: 11,
            roomOptionId: 7,
            name: "4인실",
            thumbnailImage: "https://ybe-bucket.s3.ap-northeast-2.amazonaws.com/ROOM_OPTION_THUMBNAIL_7_thumbnail.png",
            capacity: 4,
            pricePerNight: 500000,
            reservationStartDate: "2023-11-23",
            reservationEndDate: "2023-11-26",
            stayDuration: 3,
          },
        ],
      },
    ],
  },
};

export const accommodations: Accommodations[] = [
  {
    accommodationId: 1,
    name: "llll 모텔",
    address: "경기도 수원시",
    thumbnailImageUrl: "https://ybe-bucket.s3.ap-northeast-2.amazonaws.com/ACCOMMODATION_THUMB_NAIL_1_thumbnail.png",
    roomOptions: [
      {
        cartProductId: 5,
        roomOptionId: 3,
        name: "2인실(더블)",
        thumbnailImage: "https://ybe-bucket.s3.ap-northeast-2.amazonaws.com/ROOM_OPTION_THUMBNAIL_3_thumbnail.png",
        capacity: 2,
        pricePerNight: 500000,
        reservationStartDate: "2023-11-23",
        reservationEndDate: "2023-11-26",
        stayDuration: 13,
      },
    ],
  },
  {
    accommodationId: 2,
    name: "bbbb 모텔",
    address: "경기도 광주시",
    thumbnailImageUrl: "https://ybe-bucket.s3.ap-northeast-2.amazonaws.com/ACCOMMODATION_THUMB_NAIL_2_thumbnail.png",
    roomOptions: [
      {
        cartProductId: 6,
        roomOptionId: 4,
        name: "2인실(트윈)",
        thumbnailImage: "https://ybe-bucket.s3.ap-northeast-2.amazonaws.com/ROOM_OPTION_THUMBNAIL_4_thumbnail.png",
        capacity: 2,
        pricePerNight: 500000,
        reservationStartDate: "2023-11-23",
        reservationEndDate: "2023-11-26",
        stayDuration: 8,
      },
      {
        cartProductId: 9,
        roomOptionId: 6,
        name: "2인실(트윈)3",
        thumbnailImage: "https://ybe-bucket.s3.ap-northeast-2.amazonaws.com/ROOM_OPTION_THUMBNAIL_6_thumbnail.png",
        capacity: 2,
        pricePerNight: 500000,
        reservationStartDate: "2023-11-24",
        reservationEndDate: "2023-11-25",
        stayDuration: 1,
      },
    ],
  },
  {
    accommodationId: 3,
    name: "cccc 모텔",
    address: "경기도 성남시",
    thumbnailImageUrl: "https://ybe-bucket.s3.ap-northeast-2.amazonaws.com/ACCOMMODATION_THUMB_NAIL_3_thumbnail.png",
    roomOptions: [
      {
        cartProductId: 10,
        roomOptionId: 7,
        name: "4인실",
        thumbnailImage: "https://ybe-bucket.s3.ap-northeast-2.amazonaws.com/ROOM_OPTION_THUMBNAIL_7_thumbnail.png",
        capacity: 4,
        pricePerNight: 500000,
        reservationStartDate: "2023-11-23",
        reservationEndDate: "2023-11-26",
        stayDuration: 3,
      },
      {
        cartProductId: 11,
        roomOptionId: 9,
        name: "5인실",
        thumbnailImage: "https://ybe-bucket.s3.ap-northeast-2.amazonaws.com/ROOM_OPTION_THUMBNAIL_7_thumbnail.png",
        capacity: 4,
        pricePerNight: 500000,
        reservationStartDate: "2023-11-23",
        reservationEndDate: "2023-11-26",
        stayDuration: 7,
      },
    ],
  },
];
