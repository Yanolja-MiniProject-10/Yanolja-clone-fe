import { AccommodationInfoParams } from "./accommodationInformation.types";
import authInstance from "../../api/authInstance";
import instance from "../../api/instance";

export const getAccommodationInfoData = async ({
  id,
  reservationStartDate,
  reservationEndDate,
  member,
}: AccommodationInfoParams) => {
  try {
    const { data } = await instance.get(`/accommodations/${id}`, {
      params: {
        startDate: reservationStartDate,
        endDate: reservationEndDate,
        guest: member,
        accommodationId: id,
      },
    });
    return data;
  } catch (error) {
    console.error("error get accommodation info:", error);
  }
};

export const postCart = async (
  roomOptionId: number,
  numberOfGuest: number,
  reservationStartDate: string,
  reservationEndDate: string,
  stayDuration: number,
) => {
  const { data } = await authInstance.post("/carts", {
    roomOptionId,
    numberOfGuest,
    reservationStartDate,
    reservationEndDate,
    stayDuration,
  });
  return data;
};

export const postReservation = async (
  roomOptionId: number,
  numberOfGuest: number,
  reservationStartDate: string,
  reservationEndDate: string,
  stayDuration: number,
) => {
  const { data } = await authInstance.post("/payment/instant", {
    roomOptionId,
    numberOfGuest,
    reservationStartDate,
    reservationEndDate,
    stayDuration,
  });
  return data;
};
