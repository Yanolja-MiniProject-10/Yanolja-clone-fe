import { AccommodationInfoParams } from "./accommodationInformation.types";
import authInstance from "../../api/authInstance";

export const getAccommodationInfoData = async ({
  id,
  reservationStartDate,
  reservationEndDate,
  member,
}: AccommodationInfoParams) => {
  const { data } = await authInstance.get(`/accommodations/${id}`, {
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
  try {
    const { data } = await authInstance.post("/carts", {
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
  try {
    const { data } = await authInstance.post("/payment/instant", {
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
