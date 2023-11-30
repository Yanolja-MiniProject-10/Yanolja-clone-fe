import { useQuery } from "@tanstack/react-query";
import { AccommodationInfoParams } from "../../accommodationInformation.types";
import { getAccommodationInfoData } from "../../api";
import { useRecoilValue } from "recoil";
import { accommodationDateState } from "../../../../recoil/accommodation/accommodationDate";
import { accommodationMemberState } from "../../../../recoil/accommodation/accommodationMember";

export const useAccommodationInfoQuery = ({
  id,
  reservationStartDate,
  reservationEndDate,
  member,
}: AccommodationInfoParams) => {
  const { startDate, endDate } = useRecoilValue(accommodationDateState);
  const { guest } = useRecoilValue(accommodationMemberState);
  return useQuery({
    queryKey: ["getAccommodationInfoData", startDate, endDate, guest, id],
    queryFn: () => getAccommodationInfoData({ id, reservationStartDate, reservationEndDate, member }),
  });
};
