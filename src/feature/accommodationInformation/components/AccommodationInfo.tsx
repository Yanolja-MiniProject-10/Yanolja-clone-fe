import { useRecoilState } from "recoil";
import * as style from "../styles/accommodationInfo";
import Toast from "../../../components/Toast/Toast";
import { toastState } from "../../../recoil/toast";

const AccommodationInfo = () => {
  const [toast, setToast] = useRecoilState(toastState);

  /**url 데이터 받아오면 수정 필요 (숙소 id에 맞춰서) */
  return (
    <style.Wrapper>
      <style.AccomodationImg src="https://yaimg.yanolja.com/v5/2022/09/01/13/1280/6310b57ea38718.17915397.jpg" />
      <style.TextInfo>
        <style.AccommodationName>파크 하얏트 부산</style.AccommodationName>
        <style.AccommodationAddress>부산광역시 해운대구 마린시티1로 51</style.AccommodationAddress>
        <style.DivideLine />
        <style.AccommodationStaticDescWrap>
          <style.StaticDesc>숙소 소개</style.StaticDesc>
          <style.AccommodationDesc>
            이 숙소는 영국에서 시작되어...................행운을 가져다주는............ 당장 이 숙소를 선택하지 않는다면
            당신은 우산을 안가져왔는데 갑자기 비가 오는 저주를...............받게될.........수도 있음.........1시간
            이내에 선택하십시오.........
          </style.AccommodationDesc>
        </style.AccommodationStaticDescWrap>
        <style.DivideLine />
      </style.TextInfo>
      {toast.open && <Toast setToast={setToast} />}
    </style.Wrapper>
  );
};

export default AccommodationInfo;
