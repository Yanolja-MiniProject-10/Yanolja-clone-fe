const CAUTION_CONTENT_1 = "숙소 사정에 의해 취소 발생 시 100% 환불이 가능합니다.";
const CAUTION_CONTENT_2 = "예약 상품 별 숙소 정보에 기재된 취소, 환불 규정을 반드시 확인 후 이용해주시기 바랍니다.";
const CAUTION_CONTENT_3 = "예약 이후의 취소는 취소, 환불 규정에 의거하여 적용됩니다.";
const CAUTION_CONTENT_4 = "취소, 변경 불가 상품은 규정과 상관없이 취소, 변경이 불가합니다.";
const CAUTION_CONTENT_5 = "당일 결제를 포함한 체크인 당일 취소는 취소, 변경이 불가합니다.";
const CAUTION_CONTENT_6 = "숙소의 객실 정보가 수시로 변경 됨으로 이로 인한 불이익은 야놀자가 책임지지 않습니다.";
const CAUTION_CONTENT_7 = "취소, 환불 규정에 따라 취소 수수료가 발생 시, 취소 수수료는 판매가 기준으로 계산됩니다.";

export const CAUTION_CONTENTS = [
  CAUTION_CONTENT_1,
  CAUTION_CONTENT_2,
  CAUTION_CONTENT_3,
  CAUTION_CONTENT_4,
  CAUTION_CONTENT_5,
  CAUTION_CONTENT_6,
  CAUTION_CONTENT_7,
];

const REQUIRMENT_1 = "14세 이상입니다.";
const REQUIRMENT_2 = "환불 규정을 확인했습니다.";
const REQUIRMENT_3 = "예약 날짜를 확인했습니다.";
const REQUIRMENT_4 = "예약자 정보를 확인했습니다.";
const REQUIRMENT_5 = "방문 수단을 확인했습니다.";

export const REQUIRMENTS = [REQUIRMENT_1, REQUIRMENT_2, REQUIRMENT_3, REQUIRMENT_4, REQUIRMENT_5];

export const DELAY_SETAllCHECKED = 100;

export const PAYMENT_DATA_DEFAULT = {
  cartId: -1,
  count: -1,
  accommodations: [
    {
      accommodationId: -1,
      name: "",
      address: "",
      thumbnailImageUrl: "",
      roomOptions: [
        {
          cartProductId: -1,
          roomOptionId: -1,
          name: "",
          thumbnailImage: "",
          capacity: -1,
          pricePerNight: -1,
          totalPrice: -1,
          reservationStartDate: "",
          reservationEndDate: "",
          stayDuration: -1,
          transportation: "",
        },
      ],
    },
  ],
};
