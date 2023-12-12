import { useQuery } from "@tanstack/react-query";
import { AccommodationInfoParams } from "../../accommodationInformation.types";
import { getAccommodationInfoData } from "../../api";
import { useRecoilValue } from "recoil";
import { accommodationDateState } from "../../../../recoil/accommodationDate";
import { accommodationMemberState } from "../../../../recoil/accommodationMember";

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
