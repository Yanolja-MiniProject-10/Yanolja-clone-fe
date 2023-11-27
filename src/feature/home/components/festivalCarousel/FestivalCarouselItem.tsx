import { useRef } from "react";
import { Festival } from "../../home.types";
import { BannerContainer, BackgroundImg, ColorTitleBox, Title } from "../../styles/festivalCarousel/festivalCarousel";
import {
  ModalContainer,
  ModalWrapper,
  ModalInner,
  CloseButton,
  ImageBox,
  Description,
  ModalTitle,
  InfoBox,
  ContactNumber,
} from "../../styles/festivalCarousel/festivalModal";
import { IoClose } from "react-icons/io5";
interface FestivalProps {
  festival: Festival;
}

const FestivalCarouselItem = ({ festival }: FestivalProps) => {
  const { title, thumbnailImageUrl, startDate, endDate, address, phoneNumber } = festival;
  const dialogRef = useRef<HTMLDialogElement>(null);

  const showModal = () => {
    dialogRef.current?.showModal();
  };
  const closeModal = () => {
    dialogRef.current?.close();
  };

  return (
    <>
      <BannerContainer onClick={showModal}>
        <BackgroundImg style={{ backgroundImage: `url(${thumbnailImageUrl})` }}>
          <ColorTitleBox>
            <Title>{title}</Title>
          </ColorTitleBox>
        </BackgroundImg>
      </BannerContainer>

      <ModalContainer ref={dialogRef}>
        <CloseButton onClick={closeModal}>
          <IoClose />
        </CloseButton>
        <ModalWrapper>
          <ModalInner>
            <ImageBox>
              <img src={thumbnailImageUrl} alt={title} />
            </ImageBox>
            <Description>
              <ModalTitle>{title}</ModalTitle>
              <InfoBox>
                <p>{address}</p>
                <p>
                  {startDate} ~ {endDate}
                </p>
              </InfoBox>
              <ContactNumber>문의) {phoneNumber}</ContactNumber>
            </Description>
          </ModalInner>
        </ModalWrapper>
      </ModalContainer>
    </>
  );
};

export default FestivalCarouselItem;
