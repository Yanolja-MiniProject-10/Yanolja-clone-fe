import { Accommodation } from "./cart.types";

// Example usage:
export const accommodationsNull = null;

export const accommodations: Accommodation[] = [
  {
    accommodationId: 1,
    name: "그랜드 하얏트 서울",
    address: "서울특별시 네모구 동그라미동",
    roomOptions: [
      {
        roomOptionId: 2,
        name: "스탠다드 더블 - 조식 포함",
        thumbnailImage: "https://image.pensionlife.co.kr/penimg/pen_1/pen_13/1381/8a832c1fd5ec1fd1c8e2582d4b1e430d.jpg",
        capacity: 2,
        reservationStartDate: "2023.11.21 (일)",
        reservationEndDate: "2023.11.27 (월)",
        stayDuration: 7,
        pricePerNight: 50000,
        paymentAmount: 350000,
      },
      {
        roomOptionId: 3,
        name: "디럭스 더블 - 조식 포함",
        thumbnailImage: "https://image.pensionlife.co.kr/penimg/pen_1/pen_13/1381/8a832c1fd5ec1fd1c8e2582d4b1e430d.jpg",
        capacity: 2,
        reservationStartDate: "2023.11.21 (일)",
        reservationEndDate: "2023.11.23 (수)",
        stayDuration: 3,
        pricePerNight: 150000,
        paymentAmount: 450000,
      },
    ],
  },
  {
    accommodationId: 4,
    name: "파크 하얏트 서울",
    address: "서울특별시 네모구 동그라미동",
    roomOptions: [
      {
        roomOptionId: 5,
        name: "스탠다드 더블 - 조식 포함",
        thumbnailImage: "https://image.pensionlife.co.kr/penimg/pen_1/pen_13/1381/8a832c1fd5ec1fd1c8e2582d4b1e430d.jpg",
        capacity: 2,
        reservationStartDate: "2023.11.21 (일)",
        reservationEndDate: "2023.11.25 (금)",
        stayDuration: 5,
        pricePerNight: 70000,
        paymentAmount: 350000,
      },
    ],
  },
];
