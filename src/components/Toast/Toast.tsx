import { BsCheckLg } from "react-icons/bs";
import { useEffect } from "react";
import { Box, TextWrapper, LinkToCart } from "./toast.styles";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { toastState } from "../../recoil/toast";

const Toast = ({ setToast }) => {
  const { page } = useParams();
  const { message } = useRecoilValue(toastState);

  useEffect(() => {
    console.log(message);

    const timer = setTimeout(() => {
      setToast({ open: false });
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [message, setToast]);

  return (
    <Box>
      <TextWrapper>
        <BsCheckLg size="20" color="#E7497A" />
        <p>{message}</p>
      </TextWrapper>
      {page != "cart" ? <LinkToCart to="/cart">장바구니로 가기</LinkToCart> : null}
    </Box>
  );
};

export default Toast;
