// LIBRARIES
import styled, { css, keyframes } from "styled-components";
import { COLORS, DEVICE_SIZE } from "constants/variables";

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  height: 100%;
  background-color: ${COLORS.backgroundColor};
`;

export const HeaderWrapper = styled.div`
  height: 96px;
  background-color: transparent;

  @media (max-width: ${DEVICE_SIZE.MOBILE}) {
    height: 123px;
  }
`;

export const ContentWrapper = styled.div``;

export const ContactWrapper = styled.div`
  width: 100%;
`;
export const FooterWrapper = styled.div`
  height: 290px;
  background-color: ${COLORS.primaryDarkBlue};
  @media (max-width: ${DEVICE_SIZE.MOBILE}) {
    height: 400px;
  }
`;

export const SideMenuContainer = styled.div<{ isOpen: boolean }>(
  ({ isOpen }) => css`
    width: 100vw;
    height: 100vh;

    position: fixed;
    z-index: 99;
    overflow: hidden;

    background-color: ${COLORS.backgroundColor};
    visibility: ${isOpen ? "visible" : "hidden"};
    opacity: ${isOpen ? 1 : 0};
    -webkit-transition: all 0.5s ease-in-out;
    -moz-transition: all 0.5s ease-in-out;
    -ms-transition: all 0.5s ease-in-out;
    -o-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
  `
);
