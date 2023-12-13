import * as style from "../styles/accommodationRoomInfo";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const AccommodationRoomInfoSkeleton = () => {
  return (
    <style.Wrapper>
      <Skeleton height={560} style={{ zIndex: 0 }} />
      <style.TextInfo>
        <Skeleton height={30} width={200} />
        <Skeleton width={300} height={15} />
        <Skeleton width={100} height={15} />
        <style.DivideLine />
        <style.StaticDesc>상세 소개</style.StaticDesc>
        <Skeleton />
        <Skeleton />
        <Skeleton width={200} />
      </style.TextInfo>
    </style.Wrapper>
  );
};

export default AccommodationRoomInfoSkeleton;
