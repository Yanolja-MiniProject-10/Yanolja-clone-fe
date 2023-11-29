import { HomeInnerContainer } from "../styles/homeCommon";
import { InnerWrapper, IconBox, XSsizeP } from "../styles/categoryArea";

const CategoryArea = () => {
  return (
    <HomeInnerContainer>
      <InnerWrapper>
        <IconBox to="/category/호텔_리조트">
          <div>
            <img src="/category/hotel.svg" alt="hotel" />
          </div>
          <XSsizeP>호텔/리조트</XSsizeP>
        </IconBox>
        <IconBox to="/category/펜션_풀빌라">
          <div>
            <img src="/category/pension.svg" alt="pension" />
          </div>
          <XSsizeP>펜션/풀빌라</XSsizeP>
        </IconBox>
        <IconBox to="/category/모텔">
          <div>
            <img src="/category/motel.svg" alt="motel" />
          </div>
          <XSsizeP>모텔</XSsizeP>
        </IconBox>
      </InnerWrapper>
    </HomeInnerContainer>
  );
};

export default CategoryArea;
