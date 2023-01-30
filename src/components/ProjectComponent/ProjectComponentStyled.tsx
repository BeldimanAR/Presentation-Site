import styled, { css, keyframes } from "styled-components";
import {
  COLORS,
  FONT_FAMILY,
  FONT_WEIGHT,
  FONT_SIZE,
  DEVICE_SIZE,
  FIX_SPACING,
} from "constants/variables";

const fadeIn = keyframes`
  from {
    opacity: 0;
    display: none;
    visibility: hidden;
  }
  to {
    opacity: 1;
    display: block;
    visibility: visible;

  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    display: block;
    visibility: visible;
  }
  to {
    opacity: 0;
    display: none;
    visibility: hidden;
  }
`;

export const Container = styled.div``;

export const Wrapper = styled.div<{ width?: string; height?: string }>(
  ({ width, height }) => css`
    display: flex;
    flex-direction: column;
    width: ${width};
    ${height &&
    css`
      height: ${height};
    `}
    @media (max-width: ${DEVICE_SIZE.MOBILE}) {
      width: 100%;
      height: 100%;
      justify-content: center;
      align-items: center;
      padding: 0px ${FIX_SPACING.max10};
      ${height &&
      css`
        height: ${height};
      `};
    }
  `
);

export const HeroContainer = styled.div`
  height: 440px;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: ${DEVICE_SIZE.MOBILE}) {
  }
`;
export const MoreTextContinaer = styled.div<{ isShown: boolean }>(
  ({ isShown }) => css`
    animation: ${isShown ? fadeIn : fadeOut} 1s;
    display: ${isShown ? "block" : "none"};
    font-size: ${FONT_SIZE.max18};
    font-family: ${FONT_FAMILY.inter};
    font-weight: ${FONT_WEIGHT.regular};
    color: ${COLORS.primaryBlack};
    margin-top: 10px;
    @media (max-width: ${DEVICE_SIZE.MOBILE}) {
      text-align: center;
    }
  `
);
export const ImageButtonContainer = styled.div`
  width: 180px;
  height: 21px;
  margin-top: 40px;
  /* padding-left: 30px; */
  button {
    span {
      font-size: ${FONT_SIZE.max18};
      font-weight: ${FONT_WEIGHT.semiBold};

      /* img {
        width: 40%;
        height: 20px;
        filter: brightness(0) saturate(100%) invert(12%) sepia(32%)
          saturate(6853%) hue-rotate(222deg) brightness(87%) contrast(96%);
      } */
    }
  }
  @media (max-width: ${DEVICE_SIZE.MOBILE}) {
    width: 200px;
    height: 40px;
  }
`;

export const DescriptionContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${COLORS.secondaryGrey};
  padding: ${FIX_SPACING.max110} ${FIX_SPACING.max110};
  border-radius: 0 0 15px 15px;
  box-shadow: 0 5px 10px #0000001a;
  @media (max-width: ${DEVICE_SIZE.MOBILE}) {
    flex-direction: column;
    align-items: center;
    padding: ${FIX_SPACING.max60} 0px ${FIX_SPACING.max40};
    row-gap: ${FIX_SPACING.max40};
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 ${FIX_SPACING.max120};
  margin: ${FIX_SPACING.max120} 0;
  @media (max-width: ${DEVICE_SIZE.MOBILE}) {
    flex-direction: column;
    align-items: center;
    padding: ${FIX_SPACING.max60} 0px ${FIX_SPACING.max30};
    margin: 0;
    gap: ${FIX_SPACING.max50};
  }
`;

export const CarouselTitle = styled.div`
  font-family: ${FONT_FAMILY.inter};
  font-size: ${FONT_SIZE.max30};
  font-weight: ${FONT_WEIGHT.bold};
  color: ${COLORS.primaryBlue};

  @media (max-width: ${DEVICE_SIZE.MOBILE}) {
    text-align: center;
    padding: 60px 50px 40px;
  }
`;

export const CarouselContainer = styled.div<{ index: string }>(
  ({ color }) => css`
    display: flex;
    flex-direction: column;
    padding: ${FIX_SPACING.max120} ${FIX_SPACING.max120};
    background-color: ${color === "white"
      ? COLORS.secondaryGrey
      : COLORS.secondaryGrey};
    box-shadow: 0 5px 10px #0000001a;
    /* position: relative; */
    gap: ${FIX_SPACING.max60};
    @media (max-width: ${DEVICE_SIZE.MOBILE}) {
      padding: ${FIX_SPACING.max40} 0px;
      gap: ${FIX_SPACING.max40};
      margin: 0;
      /* display: block; */
    }
  `
);
export const OtherCarouselContainer = styled.div<{ index: string }>(
  ({ color }) => css`
    display: flex;
    flex-direction: column;
    padding: ${FIX_SPACING.max80} ${FIX_SPACING.max120};
    background-color: ${COLORS.backgroundColor};
    box-shadow: 0 5px 10px #0000001a;

    @media (max-width: ${DEVICE_SIZE.MOBILE}) {
      padding: ${FIX_SPACING.max60} 0px;
      margin: 0;
      gap: ${FIX_SPACING.max40};
      /* display: block; */
    }
  `
);

export const CarouselWrapper = styled.div`
  width: 100%;
  height: 540px;
  display: flex;
  flex-direction: column-reverse;
  //margin-top: 50px;
  overflow: hidden;
  div > ul {
    display: flex;
    gap: 50px;
    width: 400px;
    margin: 0;
  }
  @media (max-width: ${DEVICE_SIZE.MOBILE}) {
    div > ul {
      display: block;
      width: 100%;
      margin: 0;
      gap: 0px;
    }
    flex-direction: row;
    /* align-items: center; */
    margin: 0;
    height: 100%;
  }
`;
export const OtherCarouselWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column-reverse;

  overflow: hidden;
  div > ul {
    display: flex;
    gap: 50px;
    width: 400px;
    margin: 0;
  }
  @media (max-width: ${DEVICE_SIZE.MOBILE}) {
    div > ul {
      display: block;
      width: 100%;
      margin: 0;
      gap: 0px;
    }
    flex-direction: row;
    /* align-items: center; */
    margin: 0;
    height: 100%;
  }
`;

export const ButtonsContainer = styled.div`
  justify-content: space-between;
  align-items: center;
  display: flex;
  gap: 40px;
  margin-bottom: 50px;
`;

export const ButtonsWrapper = styled.div`
  height: 100%;
  width: auto;
  display: flex;
  gap: 40px;
  cursor: pointer;
`;

export const CardWrapper = styled.div<{ index: number }>(
  ({ index }) => css`
    // ${index !== 0 && "margin-left: 20px;"} // border-radius: 20px;
    height: 400px;
    width: 400px;
  `
);
