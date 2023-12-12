import { useRecoilState, useRecoilValue } from "recoil";
import * as style from "../styles/accommodationInfo";
import Toast from "../../../components/Toast/Toast";
import { toastState } from "../../../recoil/toast";
import { useNavigate, useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useAccommodationInfoQuery } from "../hooks/queries/fetchData";
import { accommodationDateState } from "../../../recoil/accommodationDate";
import { accommodationMemberState } from "../../../recoil/accommodationMember";
import { handleDateParam } from "../../accommodation/accommodation.utils";
import { loginModalState } from "../recoil/accommodationLoginModal";
import LoginModal from "../../../components/loginModal/LoginModal";

const AccommodationInfo = () => {
  const [toast, setToast] = useRecoilState(toastState);
  const { accommodationId } = useParams();
  const { guest } = useRecoilValue(accommodationMemberState);

  const { startDate, endDate } = useRecoilValue(accommodationDateState);

  const dateArray = handleDateParam(startDate, endDate);

  const [logInModal, setLogInModal] = useRecoilState(loginModalState);

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

  if (status === "pending") {
    return (
      <style.Wrapper style={{ zIndex: 0 }}>
        <style.SkeletonImgWrapper>
          <Skeleton height={560} />
        </style.SkeletonImgWrapper>
        <style.TextInfo>
          <Skeleton height={30} width={150} />
          <Skeleton width={300} height={25} />
          <style.DivideLine />
          <style.AccommodationStaticDescWrap>
            <style.StaticDesc>숙소 소개</style.StaticDesc>
            <Skeleton />
            <Skeleton />
            <Skeleton width={200} />
          </style.AccommodationStaticDescWrap>
          <style.DivideLine />
        </style.TextInfo>
      </style.Wrapper>
    );
  } else if (status === "error") {
    window.alert("사용 중 문제가 발생했습니다. 메인에서 다시 시도해주세요.");
    navigation("/");
    return null;
  }

  return (
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
      {logInModal && <LoginModal onClose={() => setLogInModal(false)} />}
    </style.Wrapper>
  );
};

export default AccommodationInfo;
