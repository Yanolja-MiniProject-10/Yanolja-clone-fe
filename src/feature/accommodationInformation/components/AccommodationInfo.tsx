import { useRecoilState } from "recoil";
import * as style from "../styles/accommodationInfo";
import Toast from "../../../components/Toast/Toast";
import { toastState } from "../../../recoil/toast";
import { useParams } from "react-router-dom";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useAccommodationInfoQuery } from "../hooks/queries/fetchData";

const AccommodationInfo = () => {
  const [toast, setToast] = useRecoilState(toastState);
  const { id } = useParams();

  const startDate = "2023-11-21";
  const endDate = "2023-11-22";
  const guest = 2;

  const { status, data, error } = useAccommodationInfoQuery({ id, startDate, endDate, guest });

  if (status === "pending") {
    return (
      <style.Wrapper>
        <style.SkeletonImgWrapper>
          <Skeleton height={560} />
        </style.SkeletonImgWrapper>
        <style.TextInfo>
          <Skeleton height={30} width={200} />
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
    console.log(error.message, ": 알 수 없는 오류입니다.");
  }

  return (
    <style.Wrapper>
      <style.AccomodationImg src={data.data.thumbnailImageUrl} />
      <style.TextInfo>
        <style.AccommodationName>{data.data.name}</style.AccommodationName>
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
