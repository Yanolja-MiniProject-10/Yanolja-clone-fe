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
  /**추후 확인 버튼 눌렀을 때로 수정 */
  const { startDate, endDate } = useRecoilValue(accommodationDateState);
  const { guest } = useRecoilValue(accommodationMemberState);
  return useQuery({
    queryKey: ["getAccommodationInfoData", startDate, endDate, guest],
    queryFn: () => getAccommodationInfoData({ id, reservationStartDate, reservationEndDate, member }),
  });
};
