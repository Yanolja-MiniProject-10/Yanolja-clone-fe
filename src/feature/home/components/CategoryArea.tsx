import { HomeInnerContainer } from "../styles/homeCommon";
import { InnerWrapper, IconBox, XSsizeP } from "../styles/categoryArea";

//도메인 정해지면 URL 연결 예정
const CategoryArea = () => {
  return (
    <HomeInnerContainer>
      <InnerWrapper>
        <IconBox>
          <div>
            <img src="public/category/hotel.svg" alt="hotel" />
          </div>
          <XSsizeP>호텔/리조트</XSsizeP>
        </IconBox>
        <IconBox>
          <div>
            <img src="public/category/pension.svg" alt="pension" />
          </div>
          <XSsizeP>펜션/풀빌라</XSsizeP>
        </IconBox>
        <IconBox>
          <div>
            <img src="public/category/motel.svg" alt="motel" />
          </div>
          <XSsizeP>모텔</XSsizeP>
        </IconBox>
      </InnerWrapper>
    </HomeInnerContainer>
  );
};

export default CategoryArea;
