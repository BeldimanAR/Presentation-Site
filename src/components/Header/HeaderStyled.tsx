import styled, { css } from "styled-components";
import {
  COLORS,
  FONT_FAMILY,
  FONT_WEIGHT,
  FONT_SIZE,
  DEVICE_SIZE,
} from "constants/variables";

export const HeaderContainer = styled.div(
  ({ theme }) => css`
    width: 100%;
    height: 100%;
    background-color: ${theme === "dark"
      ? COLORS.primaryDarkBlue
      : theme === "transparent"
      ? "transparent"
      : COLORS.backgroundColor};

    display: flex;
    justify-content: space-between;
    align-items: center;

    ${theme === "transparent" &&
    css`
      position: absolute;
      top: 0;
      height: 96px;
    `}
  `
);

export const HeaderLogoContainer = styled.div`
  padding: 0px 0px 0px 110px;
  height: 40px;
  cursor: pointer;
  @media (max-width: ${DEVICE_SIZE.MOBILE}) {
    padding: 0px 0px 0px 20px;
    height: 30px;
  }
`;

export const HeaderUtilityContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 110px 0 0;
  gap: 40px;

  @media (max-width: ${DEVICE_SIZE.MOBILE}) {
    padding: 0 20px 0 0;
    gap: 0px;
  }
`;

export const HeaderButtonsContainer = styled.div`
  height: 40px;
  display: flex;
  gap: 40px;
`;

export const HeaderButtonWrapper = styled.div`
  width: fit-content;
`;

export const HeaderLanguageContainer = styled.div<{ isOpen: boolean }>(
  ({ isOpen }) => css`
    height: 40px;
    width: 150px;

    @media (max-width: ${DEVICE_SIZE.MOBILE}) {
      div {
        display: flex;
        gap: 5px;
      }

      max-width: 80px;
      visibility: ${isOpen ? "visible" : "hidden"};
      opacity: ${isOpen ? 1 : 0};
      -webkit-transition: all 0.5s ease-in-out;
      -moz-transition: all 0.5s ease-in-out;
      -ms-transition: all 0.5s ease-in-out;
      -o-transition: all 0.5s ease-in-out;
      transition: all 0.5s ease-in-out;
    }
  `
);

export const HeaderHamburgerContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderHamburgerMenu = styled.button`
  height: 30px;
  width: 36px;

  background-color: transparent;
  position: relative;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  cursor: pointer;
  border: none;
  -webkit-tap-highlight-color: transparent;

  &:focus {
    outline: 0;
  }
`;

export const HeaderHamburgerMenuSlide = styled.span<{
  number: string;
  open: boolean;
  menuStyle: string;
}>(
  ({ number, open, menuStyle }) => css`
    display: block;
    position: absolute;
    height: 3px;

    width: 100%;
    background: ${menuStyle === "dark"
      ? COLORS.primaryDarkBlue
      : COLORS.backgroundColor};
    border-radius: 9px;
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.5s ease-in-out;
    -moz-transition: 0.5s ease-in-out;
    -o-transition: 0.5s ease-in-out;
    transition: 0.5s ease-in-out;

    ${number === "1" &&
    css`
      top: 15%;
      -webkit-transform-origin: left center;
      -moz-transform-origin: left center;
      -o-transform-origin: left center;
      transform-origin: left center;
      ${open &&
      css`
        -webkit-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -o-transform: rotate(45deg);
        transform: rotate(45deg);
        top: 0px;
        left: 0px;
      `}
    `}
    ${number === "2" &&
    css`
      top: 51%;
      -webkit-transform-origin: left center;
      -moz-transform-origin: left center;
      -o-transform-origin: left center;
      transform-origin: left center;
      ${open &&
      css`
        width: 0%;
        opacity: 0;
      `}
    `}
    ${number === "3" &&
    css`
      top: 88%;
      -webkit-transform-origin: left center;
      -moz-transform-origin: left center;
      -o-transform-origin: left center;
      transform-origin: left center;
      ${open &&
      css`
        -webkit-transform: rotate(-45deg);
        -moz-transform: rotate(-45deg);
        -o-transform: rotate(-45deg);
        transform: rotate(-45deg);
        top: 26px;
        left: 0px;
      `}
    `}
  `
);
