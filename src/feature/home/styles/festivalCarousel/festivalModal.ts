import styled from "styled-components";

const ModalContainer = styled.dialog`
  border: none !important;

  width: 480px;
  min-height: 500px;
  padding: 1.5rem 2rem 2rem;

  border-radius: ${({ theme }) => theme.box.radius};
  box-shadow: ${({ theme }) => theme.box.shadow};

  &:focus {
    outline: none;
  }

  &::backdrop {
    background: rgba(0, 0, 0, 0.5);
  }
`;

const CloseButton = styled.p`
  margin-bottom: 1.5rem;

  display: flex;
  justify-content: flex-end;

  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.color.middleGray};

  * {
    transition: 0.4s;
    cursor: pointer;
    &:hover {
      color: ${({ theme }) => theme.color.mainPink};
    }
  }
`;

const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalInner = styled.div`
  display: flex;
  flex-direction: column;
`;

const ImageBox = styled.div`
  margin-bottom: 2rem;
  border-radius: 5px;

  img {
    width: 350px;
    height: 200px;

    object-fit: contain;
  }
`;

const Description = styled.div`
  width: 350px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`;

const ModalTitle = styled.div`
  word-break: keep-all;
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: bold;
`;

const InfoBox = styled.div`
  margin-bottom: 1.5rem;

  display: flex;
  flex-direction: column;
  gap: 5px;

  color: ${({ theme }) => theme.color.darkGray};
  font-size: ${({ theme }) => theme.fontSize.xxs};
`;

const ContactNumber = styled.b`
  font-size: ${({ theme }) => theme.fontSize.xxs};
`;

export {
  ModalContainer,
  CloseButton,
  ModalWrapper,
  ModalInner,
  ImageBox,
  Description,
  ModalTitle,
  InfoBox,
  ContactNumber,
};
