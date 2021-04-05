import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.50s linear;
  }
  .links {
    background: ${({ theme }) => theme.boxBackground};
    color: ${({ theme }) => theme.boxText};
    box-shadow: ${({ theme }) => theme.boxShadow};
  }
  .avatar {
    background-color: ${({ theme }) => theme.boxBackground};
    box-shadow: ${({ theme }) => theme.boxShadow};
  }
  .link-media-1 {
    background-image: url("${({ theme }) => theme.linkImg}");
  }
  `;
