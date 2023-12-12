import { useRecoilState, useRecoilValue } from "recoil";
import * as style from "../styles/accommodationInfo";
import Toast from "../../../components/Toast/Toast";
import { toastState } from "../../../recoil/toast";
import { useNavigate, useParams } from "react-router-dom";
import { useAccommodationInfoQuery } from "../hooks/queries/fetchData";
import { accommodationDateState } from "../../../recoil/accommodation/accommodationDate";
import { accommodationMemberState } from "../../../recoil/accommodation/accommodationMember";
import { handleDateParam } from "../../accommodation/accommodation.utils";
import AccommodationInfoSkeleton from "./AccommodationInfoSkeleton";
import { useEffect } from "react";

const AccommodationInfo = () => {
  const [toast, setToast] = useRecoilState(toastState);
  const { accommodationId } = useParams();
  const { guest } = useRecoilValue(accommodationMemberState);

  const { startDate, endDate } = useRecoilValue(accommodationDateState);

  const dateArray = handleDateParam(startDate, endDate);

  let reservationStartDate = "";
  let reservationEndDate = "";
  if (dateArray) {
    reservationStartDate = dateArray![0];
    reservationEndDate = dateArray![1];
  }

  const { status, data } = useAccommodationInfoQuery({
    id: accommodationId,
    reservationStartDate,
    reservationEndDate,
    member: guest,
  });

  const navigation = useNavigate();

  useEffect(() => {
    if (status === "error") {
      window.alert("사용 중 문제가 발생했습니다. 메인에서 다시 시도해주세요.");
      navigation("/");
      return () => {
        null;
      };
    }
  }, []);

  return status === "pending" ? (
    <AccommodationInfoSkeleton />
  ) : (
    <style.Wrapper>
      <style.ImgWrapper>
        <style.AccomodationImg src={data.data.thumbnailImageUrl} />
      </style.ImgWrapper>
      <style.TextInfo>
        <style.AccommodationName>{data.data.name}</style.AccommodationName>
        <style.AccommodationCategory>{data.data.category}</style.AccommodationCategory>
        <style.AccommodationAddress>{data.data.address}</style.AccommodationAddress>
        <style.DivideLine />
        <style.AccommodationStaticDescWrap>
          <style.StaticDesc>숙소 소개</style.StaticDesc>
          <style.AccommodationDesc>{data.data.description}</style.AccommodationDesc>
        </style.AccommodationStaticDescWrap>
        <style.DivideLine />
      </style.TextInfo>
      {toast.open && <Toast setToast={setToast} />}
    </style.Wrapper>
  );
};

export default AccommodationInfo;
