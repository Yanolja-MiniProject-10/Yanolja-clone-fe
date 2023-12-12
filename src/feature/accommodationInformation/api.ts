import { AccommodationInfoParams } from "./accommodationInformation.types";
import authInstance from "../../api/authInstance";
import getLocalStorage from "../../util/getLocalStorage";

export const getAccommodationInfoData = async ({
  id,
  reservationStartDate,
  reservationEndDate,
  member,
}: AccommodationInfoParams) => {
  const { accessToken } = getLocalStorage();

  const { data } = await authInstance.get(`/accommodations/${id}`, {
    headers: {
      Authorization: accessToken,
    },
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
  const { accessToken } = getLocalStorage();

  try {
    const { data } = await authInstance.post("/carts", {
      headers: {
        Authorization: accessToken,
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
  const { accessToken } = getLocalStorage();

  try {
    const { data } = await authInstance.post("/payment/instant", {
      headers: {
        Authorization: accessToken,
      },
      roomOptionId,
      numberOfGuest,
      reservationStartDate,
      reservationEndDate,
      stayDuration,
    });
    return data;
  } catch (error) {
    console.error("Error posting reservation:", error);
  }
};
