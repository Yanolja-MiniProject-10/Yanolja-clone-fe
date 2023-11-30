import instance from "../../api/instance";
import { AccommodationInfoParams } from "./accommodationInformation.types";
import getToken from "../../util/getToken";

export const getAccommodationInfoData = async ({
  id,
  reservationStartDate,
  reservationEndDate,
  member,
}: AccommodationInfoParams) => {
  const { data } = await instance.get(`/accommodations/${id}`, {
    params: {
      startDate: reservationStartDate,
      endDate: reservationEndDate,
      guest: member,
      accommodationId: id,
    },
  });
  return data;
};

export const postCart = async (
  roomOptionId: number,
  numberOfGuest: number,
  reservationStartDate: string,
  reservationEndDate: string,
  stayDuration: number,
) => {
  const { accessToken, refreshToken } = getToken();
  console.log("토큰", accessToken, refreshToken);

  try {
    const { data } = await instance.post("/carts", {
      headers: {
        accessToken: accessToken,
        refreshToken: refreshToken,
      },
      roomOptionId,
      numberOfGuest,
      reservationStartDate,
      reservationEndDate,
      stayDuration,
    });
    return data;
  } catch (error) {
    console.error("Error posting cart:", error);
  }
};

export const postReservation = async (
  roomOptionId: number,
  numberOfGuest: number,
  reservationStartDate: string,
  reservationEndDate: string,
  stayDuration: number,
) => {
  const { accessToken, refreshToken } = getToken();

  try {
    const { data } = await instance.post("/payment/instant", {
      headers: {
        accessToken: accessToken,
        refreshToken: refreshToken,
      },
      roomOptionId,
      numberOfGuest,
      reservationStartDate,
      reservationEndDate,
      stayDuration,
    });
    return data;
  } catch (error) {
    console.error("Error posting cart:", error);
  }
};
