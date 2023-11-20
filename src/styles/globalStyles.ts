import { createGlobalStyle } from "styled-components";
import NotoSans from "../assets/font/NotoSansKR-Medium.woff";

export const GlobalStyles = createGlobalStyle`
@font-face{
        font-family: "notoSans";
        src:local(notoSans), url(${NotoSans}) format('woff');
    }

    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }
    #root{
        font-family: "notoSans";
    }

`;
